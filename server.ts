import express from 'express';
import { createServer as createViteServer } from 'vite';
import { GoogleGenAI } from '@google/genai';
import dotenv from 'dotenv';
import path from 'path';
import fs from 'fs';

dotenv.config();

async function startServer() {
  const app = express();
  const port = process.env.PORT ? parseInt(process.env.PORT, 10) : 3000;

  app.use(express.json({ limit: '10mb' }));

  // Health check endpoint for Cloud Run and monitoring
  app.get('/healthz', (_req, res) => {
    res.status(200).send('OK');
  });

  // Music Generation Route (Lyria & AI Sound Guidance)
  app.post('/api/generate-music', async (req, res) => {
    try {
      const { prompt, model = 'lyria-3-clip-preview' } = req.body;
      const apiKey = process.env.GEMINI_API_KEY;

      if (!apiKey || apiKey === 'MY_GEMINI_API_KEY') {
        return res.status(200).json({
          fallbackToProcedural: true,
          message: '检测到未配置 GEMINI_API_KEY，已自动无缝切换至高保真离线声波合成引擎。',
        });
      }

      const ai = new GoogleGenAI({ apiKey });

      try {
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

        if (audioBase64) {
          return res.json({
            audioBase64,
            mimeType,
            lyrics,
          });
        }
      } catch (lyriaErr: any) {
        console.warn('Lyria API not available for current key, notifying client to use procedural synthesis:', lyriaErr.message);
        return res.status(200).json({
          fallbackToProcedural: true,
          message: `云端 Lyria 模型需要专门的企业权限 (${lyriaErr.message})，已为您即刻激活纯正离线原声合成引擎。`,
        });
      }

      return res.status(200).json({
        fallbackToProcedural: true,
        message: '已启用内置航天级离线多谐波声音合成器。',
      });
    } catch (error: any) {
      console.error('Music generation error:', error);
      return res.status(200).json({
        fallbackToProcedural: true,
        message: error.message || '已自动切换至本地多声部合成引擎。',
      });
    }
  });

  const distDir = path.resolve(process.cwd(), 'dist');
  const isProduction = process.env.NODE_ENV === 'production' || fs.existsSync(distDir);

  if (isProduction) {
    app.use(express.static(distDir));
    app.get('*', (req, res, next) => {
      if (req.path.startsWith('/api')) {
        return next();
      }
      res.sendFile(path.resolve(distDir, 'index.html'));
    });
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
