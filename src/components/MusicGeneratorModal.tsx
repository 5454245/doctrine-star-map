import React, { useState, useRef } from 'react';
import { IsmNode } from '../types/ism';
import { X, Music, Play, Pause, Download, Sparkles, RefreshCw, Volume2, AlertCircle } from 'lucide-react';

interface MusicGeneratorModalProps {
  currentIsm: IsmNode | null;
  onClose: () => void;
}

export const MusicGeneratorModal: React.FC<MusicGeneratorModalProps> = ({
  currentIsm,
  onClose,
}) => {
  const [modelType, setModelType] = useState<'lyria-3-clip-preview' | 'lyria-3-pro-preview'>(
    'lyria-3-clip-preview'
  );

  // Generate suggested prompt based on current ism
  const defaultPrompt = currentIsm
    ? `A contemplative and profound soundtrack capturing the spirit of ${currentIsm.englishName} (${currentIsm.name}). ${
        currentIsm.category === 'philosophical'
          ? 'Deep cello solos, slow resonant piano chords, echoing into silence.'
          : currentIsm.category === 'cultural'
          ? 'Passionate 19th-century expressive strings, evocative dynamics, and emotional grandeur.'
          : currentIsm.category === 'contemporary'
          ? 'High-tempo futuristic synth arpeggios with pulsing cybernetic basslines.'
          : 'Solemn brass and chamber orchestra, noble harmonies of constitutional order.'
      }`
    : 'A grand cosmic ambient orchestral soundtrack depicting the evolution of human philosophical thought, shimmering strings and deep analog drone.';

  const [prompt, setPrompt] = useState(defaultPrompt);
  const [isLoading, setIsLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState<string | null>(null);
  const [audioUrl, setAudioUrl] = useState<string | null>(null);
  const [lyrics, setLyrics] = useState<string | null>(null);
  const [isPlaying, setIsPlaying] = useState(false);

  const audioRef = useRef<HTMLAudioElement | null>(null);

  // Handle music generation request
  const handleGenerate = async () => {
    setIsLoading(true);
    setErrorMsg(null);
    if (audioUrl) {
      URL.revokeObjectURL(audioUrl);
      setAudioUrl(null);
    }

    try {
      const response = await fetch('/api/generate-music', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          prompt,
          model: modelType,
        }),
      });

      const data = await response.json();

      if (!response.ok) {
        throw new Error(data.error || '音乐生成失败');
      }

      if (data.audioBase64) {
        const binary = atob(data.audioBase64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: data.mimeType || 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setAudioUrl(url);
        setLyrics(data.lyrics || null);
      } else {
        throw new Error('未收到有效的音频数据');
      }
    } catch (err: any) {
      console.error(err);
      setErrorMsg(err.message || '生成失败，请检查 API Key 配置。');
    } finally {
      setIsLoading(false);
    }
  };

  const togglePlay = () => {
    if (!audioRef.current) return;
    if (isPlaying) {
      audioRef.current.pause();
      setIsPlaying(false);
    } else {
      audioRef.current.play();
      setIsPlaying(true);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-lg bg-stone-900 border border-stone-800 rounded-2xl shadow-2xl flex flex-col overflow-hidden">
        {/* Header */}
        <div className="px-6 py-4 border-b border-stone-800 flex items-center justify-between shrink-0 bg-stone-900/90">
          <div className="flex items-center gap-2">
            <Music className="w-5 h-5 text-amber-400" />
            <div>
              <h2 className="text-base font-bold font-serif-sc text-stone-100">
                思想时代原声生成 (Lyria 3)
              </h2>
              <span className="text-[10px] text-stone-400">
                由 Google Lyria 驱动 · 聆听意识形态的时代回响
              </span>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 text-stone-400 hover:text-stone-100 hover:bg-stone-800 rounded-lg transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content */}
        <div className="p-6 space-y-5 text-sm">
          {/* Current Target Tag */}
          {currentIsm && (
            <div className="flex items-center gap-2 p-2.5 rounded-lg bg-stone-800/40 border border-stone-800">
              <span
                className="w-2.5 h-2.5 rounded-full"
                style={{ backgroundColor: currentIsm.color }}
              />
              <span className="text-xs text-stone-300 font-serif-sc">
                当前对准主体：
              </span>
              <span className="text-xs font-bold text-stone-100 font-serif-sc">
                {currentIsm.name} ({currentIsm.englishName})
              </span>
            </div>
          )}

          {/* Model selection */}
          <div>
            <label className="text-xs font-semibold uppercase tracking-wider text-stone-400 block mb-2">
              生成规格与模型
            </label>
            <div className="grid grid-cols-2 gap-3">
              <button
                type="button"
                onClick={() => setModelType('lyria-3-clip-preview')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  modelType === 'lyria-3-clip-preview'
                    ? 'bg-amber-950/30 border-amber-500/80 text-amber-200'
                    : 'bg-stone-800/30 border-stone-700/60 text-stone-400 hover:bg-stone-800/60'
                }`}
              >
                <div className="text-xs font-bold text-stone-100 mb-0.5">
                  30秒氛围短篇 (Clip)
                </div>
                <div className="text-[10px] text-stone-400">
                  快速生成灵感切片 · lyria-3-clip-preview
                </div>
              </button>

              <button
                type="button"
                onClick={() => setModelType('lyria-3-pro-preview')}
                className={`p-3 rounded-xl border text-left transition-all ${
                  modelType === 'lyria-3-pro-preview'
                    ? 'bg-amber-950/30 border-amber-500/80 text-amber-200'
                    : 'bg-stone-800/30 border-stone-700/60 text-stone-400 hover:bg-stone-800/60'
                }`}
              >
                <div className="text-xs font-bold text-stone-100 mb-0.5">
                  完整思想长卷 (Pro)
                </div>
                <div className="text-[10px] text-stone-400">
                  全长宏大交响叙事 · lyria-3-pro-preview
                </div>
              </button>
            </div>
          </div>

          {/* Prompt input */}
          <div>
            <div className="flex items-center justify-between mb-1.5">
              <label className="text-xs font-semibold uppercase tracking-wider text-stone-400">
                音乐氛围描述词 (Prompt)
              </label>
              <button
                type="button"
                onClick={() => setPrompt(defaultPrompt)}
                className="text-[11px] text-amber-400 hover:underline"
              >
                还原默认
              </button>
            </div>
            <textarea
              rows={3}
              value={prompt}
              onChange={(e) => setPrompt(e.target.value)}
              className="w-full bg-stone-950/70 border border-stone-700 rounded-lg p-3 text-xs text-stone-200 placeholder-stone-500 focus:outline-none focus:border-amber-400 transition-colors leading-relaxed"
              placeholder="描述乐器、情绪、节奏或场景..."
            />
          </div>

          {/* Error notice if any */}
          {errorMsg && (
            <div className="p-3 rounded-lg bg-rose-950/30 border border-rose-900/50 flex items-start gap-2 text-xs text-rose-300">
              <AlertCircle className="w-4 h-4 shrink-0 text-rose-400 mt-0.5" />
              <span>{errorMsg}</span>
            </div>
          )}

          {/* Player when audio ready */}
          {audioUrl && (
            <div className="p-4 rounded-xl bg-stone-800/50 border border-stone-700/80 space-y-3">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-2 text-stone-200 text-xs">
                  <Volume2 className="w-4 h-4 text-emerald-400" />
                  <span>时代原声音频就绪</span>
                </div>
                <a
                  href={audioUrl}
                  download="philosophy-soundtrack.wav"
                  className="text-xs text-stone-400 hover:text-white flex items-center gap-1"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>下载 WAV</span>
                </a>
              </div>

              <div className="flex items-center gap-3">
                <button
                  onClick={togglePlay}
                  className="w-10 h-10 rounded-full bg-amber-400 text-stone-950 flex items-center justify-center hover:bg-amber-300 transition-colors shrink-0 shadow-lg"
                >
                  {isPlaying ? (
                    <Pause className="w-5 h-5" />
                  ) : (
                    <Play className="w-5 h-5 ml-0.5" />
                  )}
                </button>
                <div className="flex-1">
                  <audio
                    ref={audioRef}
                    src={audioUrl}
                    onEnded={() => setIsPlaying(false)}
                    controls
                    className="w-full h-8"
                  />
                </div>
              </div>

              {lyrics && (
                <div className="p-2.5 rounded bg-stone-950/60 border border-stone-800 text-[11px] text-stone-300 italic">
                  “{lyrics}”
                </div>
              )}
            </div>
          )}

          {/* Action button */}
          <button
            type="button"
            onClick={handleGenerate}
            disabled={isLoading || !prompt.trim()}
            className="w-full py-2.5 px-4 rounded-xl bg-amber-400 hover:bg-amber-300 disabled:opacity-50 text-stone-950 font-bold text-xs flex items-center justify-center gap-2 transition-all shadow-lg shadow-amber-400/10 cursor-pointer disabled:cursor-not-allowed"
          >
            {isLoading ? (
              <>
                <RefreshCw className="w-4 h-4 animate-spin" />
                <span>Lyria 正在谱写意识形态时代乐章...</span>
              </>
            ) : (
              <>
                <Sparkles className="w-4 h-4" />
                <span>生成时代音乐 ({modelType === 'lyria-3-clip-preview' ? '30s Clip' : 'Full Pro'})</span>
              </>
            )}
          </button>
        </div>
      </div>
    </div>
  );
};
