import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';

dotenv.config();

async function startServer() {
  const app = express();
  const port = process.env.PORT ? parseInt(process.env.PORT) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // Lyria Music Generation Route
  app.post('/api/generate-music', async (req, res) => {
    try {
      const { prompt, model = 'lyria-3-clip-preview' } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(400).json({
          error: 'GEMINI_API_KEY 未配置，请在 AI Studio 设置中配置 API Key。',
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      // Call Lyria model via generateContentStream
      const responseStream = await ai.models.generateContentStream({
        model: model === 'lyria-3-pro-preview' ? 'lyria-3-pro-preview' : 'lyria-3-clip-preview',
        contents: prompt || 'Generate a contemplative ambient orchestral track reflecting historical philosophical depth.',
      });

      let audioBase64 = '';
      let lyrics = '';
      let mimeType = 'audio/wav';

      for await (const chunk of responseStream) {
        const parts = chunk.candidates?.[0]?.content?.parts;
        if (!parts) continue;

        for (const part of parts) {
          if (part.inlineData?.data) {
            if (!audioBase64 && part.inlineData.mimeType) {
              mimeType = part.inlineData.mimeType;
            }
            audioBase64 += part.inlineData.data;
          }
          if (part.text && !lyrics) {
            lyrics = part.text;
          }
        }
      }

      if (!audioBase64) {
        return res.status(500).json({ error: '模型未能生成有效音频数据。' });
      }

      return res.json({
        audioBase64,
        mimeType,
        lyrics,
      });
    } catch (error: any) {
      console.error('Music generation error:', error);
      return res.status(500).json({
        error: error.message || '生成音乐时发生异常，请重试。',
      });
    }
  });

  // Mount Vite dev middleware or serve static files in production
  if (process.env.NODE_ENV === 'production') {
    app.use(express.static('dist'));
  } else {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: 'spa',
    });
    app.use(vite.middlewares);
  }

  app.listen(port, '0.0.0.0', () => {
    console.log(`Server listening on port ${port}`);
  });
}

startServer();
