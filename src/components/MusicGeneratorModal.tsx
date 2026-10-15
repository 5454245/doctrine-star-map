import React, { useState, useRef, useEffect } from 'react';
import { IsmNode } from '../types/ism';
import { audioEngine, BACKGROUND_TRACKS, BackgroundAudioState } from '../utils/audioEngine';
import { 
  X, 
  Play, 
  Pause, 
  Download, 
  Sparkles, 
  RefreshCw, 
  Volume2, 
  Activity, 
  Radio, 
  Cpu, 
  Info,
  Check
} from 'lucide-react';

interface MusicGeneratorModalProps {
  currentIsm: IsmNode | null;
  onClose: () => void;
}

export const MusicGeneratorModal: React.FC<MusicGeneratorModalProps> = ({
  currentIsm,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'synth' | 'cloud'>('synth');
  
  // Real-time Background Music Sync
  const [bgAudio, setBgAudio] = useState<BackgroundAudioState>(() => audioEngine.getBackgroundState());

  useEffect(() => {
    return audioEngine.subscribeBackgroundState((state) => {
      setBgAudio(state);
    });
  }, []);

  const [isRenderingWav, setIsRenderingWav] = useState(false);
  const [renderedWavUrl, setRenderedWavUrl] = useState<string | null>(null);

  // Cloud AI state
  const defaultPrompt = currentIsm
    ? `A cinematic contemplative soundtrack capturing the essence of ${currentIsm.englishName} (${currentIsm.name}). Resonant analog drone, atmospheric depth, historical grandeur.`
    : 'A grand atmospheric orchestral soundtrack depicting the evolution of human philosophical thought, shimmering strings and deep analog drone.';
  const [prompt, setPrompt] = useState(defaultPrompt);
  const [cloudModel, setCloudModel] = useState<'lyria-3-clip-preview' | 'lyria-3-pro-preview'>('lyria-3-clip-preview');
  const [isCloudLoading, setIsCloudLoading] = useState(false);
  const [cloudStatusMsg, setCloudStatusMsg] = useState<string | null>(null);

  // Visualizer canvas ref
  const canvasRef = useRef<HTMLCanvasElement | null>(null);
  const animFrameRef = useRef<number | null>(null);

  // Clean up WAV URL on unmount (DO NOT stop background music!)
  useEffect(() => {
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
      if (renderedWavUrl) URL.revokeObjectURL(renderedWavUrl);
    };
  }, [renderedWavUrl]);

  // Audio Visualizer Loop
  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    if (!ctx) return;

    let visualTime = 0;

    const draw = () => {
      visualTime += 0.05;
      const { width, height } = canvas;
      ctx.fillStyle = '#060608';
      ctx.fillRect(0, 0, width, height);

      const analyser = audioEngine.getAnalyser();

      if (bgAudio.isPlaying && analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        const barWidth = (width / bufferLength) * 2.2;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * (height - 12);
          ctx.fillStyle = i % 4 === 0 ? '#38bdf8' : i % 2 === 0 ? '#818cf8' : '#ffffff';
          ctx.fillRect(x, height - barHeight, barWidth - 1, barHeight);
          x += barWidth;
        }

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.2)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        ctx.lineTo(width, height / 2);
        ctx.stroke();
      } else {
        ctx.strokeStyle = 'rgba(255, 255, 255, 0.15)';
        ctx.lineWidth = 1;
        ctx.beginPath();
        ctx.moveTo(0, height / 2);
        for (let x = 0; x < width; x += 3) {
          const y = height / 2 + Math.sin(x * 0.03 + visualTime) * 3;
          ctx.lineTo(x, y);
        }
        ctx.stroke();

        ctx.fillStyle = 'rgba(161, 161, 170, 0.6)';
        ctx.font = '10px "Plus Jakarta Sans", monospace';
        ctx.textAlign = 'center';
        ctx.fillText('PAUSED // 点击播放启动深空背景原声', width / 2, height / 2 + 16);
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [bgAudio.isPlaying]);

  // Handle background track selection
  const handleSelectTrack = (trackId: string) => {
    audioEngine.switchBackgroundTrack(trackId);
    if (!bgAudio.isPlaying || bgAudio.isMuted) {
      audioEngine.setMuted(false);
      audioEngine.playBackgroundMusic(trackId);
    }
  };

  // Toggle Background Music playback / mute
  const handleTogglePlay = () => {
    if (bgAudio.isPlaying && !bgAudio.isMuted) {
      audioEngine.setMuted(true);
    } else {
      audioEngine.setMuted(false);
      audioEngine.playBackgroundMusic();
    }
  };

  // Handle offline WAV export
  const handleRenderWav = async () => {
    setIsRenderingWav(true);
    try {
      const { url } = await audioEngine.renderOfflineWav(currentIsm, bgAudio.currentTrackId, 18);
      setRenderedWavUrl(url);
    } catch {
      // Offline audio fallback
    } finally {
      setIsRenderingWav(false);
    }
  };

  // Cloud AI Generation Request
  const handleGenerateCloudMusic = async () => {
    setIsCloudLoading(true);
    setCloudStatusMsg(null);

    try {
      const response = await fetch('/api/generate-music', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ prompt, model: cloudModel }),
      });

      const data = await response.json();

      if (data.audioBase64) {
        const binary = atob(data.audioBase64);
        const bytes = new Uint8Array(binary.length);
        for (let i = 0; i < binary.length; i++) {
          bytes[i] = binary.charCodeAt(i);
        }
        const blob = new Blob([bytes], { type: data.mimeType || 'audio/wav' });
        const url = URL.createObjectURL(blob);
        setRenderedWavUrl(url);
        setCloudStatusMsg('云端 AI 音频已生成成功！');
      } else if (data.fallbackToProcedural) {
        setCloudStatusMsg(data.message || '已自动切换至本地多声部原声合成引擎。');
        const { url } = await audioEngine.renderOfflineWav(currentIsm, bgAudio.currentTrackId, 18);
        setRenderedWavUrl(url);
      }
    } catch {
      setCloudStatusMsg('云端服务暂时受限，已就绪本地原声引擎。');
      const { url } = await audioEngine.renderOfflineWav(currentIsm, bgAudio.currentTrackId, 18);
      setRenderedWavUrl(url);
    } finally {
      setIsCloudLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl bg-zinc-950/95 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white font-sans max-h-[90vh]">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-white font-bold">
                  AUDIO SYNTH // 时代原声背景音乐中心
                </h2>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/80 border border-white/15">
                  REV 3.3
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                CONTINUOUS AMBIENT SOUNDTRACK // 全景深空永续环境原声
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
            title="关闭窗口 (背景音乐继续播放)"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Target Ideology Status Badge */}
        {currentIsm && (
          <div className="px-6 py-2.5 bg-zinc-900/60 border-b border-white/10 flex items-center justify-between text-xs font-mono">
            <div className="flex items-center gap-2">
              <span className="w-2 h-2 rounded-full bg-cyan-400 shadow-sm shadow-cyan-400" />
              <span className="text-zinc-400">TARGET //</span>
              <span className="text-white font-bold">{currentIsm.name}</span>
              <span className="text-zinc-500">[{currentIsm.englishName}]</span>
            </div>
            <span className="text-[10px] text-zinc-400 uppercase tracking-widest">
              ERA // {currentIsm.period.split('（')[0]}
            </span>
          </div>
        )}

        {/* Tab Switcher */}
        <div className="flex border-b border-white/10 bg-black/40">
          <button
            type="button"
            onClick={() => setActiveTab('synth')}
            className={`flex-1 py-3 text-xs font-mono uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-2 ${
              activeTab === 'synth'
                ? 'text-white border-b-2 border-white bg-white/5 font-bold'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Cpu className="w-3.5 h-3.5 text-cyan-400" />
            <span>背景音乐调谐器 (连续环境音)</span>
          </button>
          <button
            type="button"
            onClick={() => setActiveTab('cloud')}
            className={`flex-1 py-3 text-xs font-mono uppercase tracking-[0.14em] transition-all flex items-center justify-center gap-2 ${
              activeTab === 'cloud'
                ? 'text-white border-b-2 border-white bg-white/5 font-bold'
                : 'text-zinc-500 hover:text-zinc-300'
            }`}
          >
            <Sparkles className="w-3.5 h-3.5" />
            <span>云端 AI 乐章 (Google Lyria)</span>
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 overflow-y-auto space-y-4 flex-1">
          {/* Oscilloscope Visualizer Screen */}
          <div className="border border-white/10 rounded-xl bg-black/80 p-3 overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1 px-1">
              <span>OSCILLOSCOPE // REAL-TIME SPECTRUM</span>
              <span className="flex items-center gap-1.5">
                <span
                  className={`w-1.5 h-1.5 rounded-full ${
                    bgAudio.isPlaying ? 'bg-cyan-400 animate-ping' : 'bg-zinc-600'
                  }`}
                />
                {bgAudio.isPlaying ? 'PLAYING BACKGROUND MUSIC' : 'PAUSED'}
              </span>
            </div>
            <canvas ref={canvasRef} width={480} height={70} className="w-full h-16 rounded block" />
          </div>

          {activeTab === 'synth' ? (
            <>
              {/* Profile Selector */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-2 flex items-center justify-between">
                  <span>SELECT AMBIENT THEME // 切换背景音乐曲目</span>
                  <span className="text-[10px] text-cyan-400 font-sans">点击即时无缝切换</span>
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {BACKGROUND_TRACKS.map((p) => {
                    const isSelected = bgAudio.currentTrackId === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => handleSelectTrack(p.id)}
                        className={`p-3 text-left border rounded-xl transition-all relative ${
                          isSelected
                            ? 'border-cyan-400/60 bg-cyan-950/30 text-white shadow-md shadow-cyan-950/40 ring-1 ring-cyan-400/30'
                            : 'border-white/10 bg-black/40 text-zinc-400 hover:border-white/25 hover:text-zinc-200'
                        }`}
                      >
                        {isSelected && (
                          <span className="absolute top-2.5 right-2.5 flex items-center gap-1 text-[9px] font-mono text-cyan-300">
                            <Check className="w-3 h-3 text-cyan-400" />
                            <span>ACTIVE</span>
                          </span>
                        )}
                        <div className="flex items-center justify-between mb-1 pr-12">
                          <span className="text-xs font-mono font-bold tracking-wider">
                            {p.name.split('//')[0]}
                          </span>
                        </div>
                        <span className="inline-block text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-zinc-300 mb-1.5">
                          {p.tag}
                        </span>
                        <p className="text-[11px] text-zinc-400 leading-snug line-clamp-2">{p.desc}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons: Live Play / Pause + Render WAV */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={handleTogglePlay}
                  className={`py-3 px-4 text-xs font-mono tracking-[0.14em] uppercase border rounded-xl transition-all flex items-center justify-center gap-2 ${
                    bgAudio.isPlaying
                      ? 'border-cyan-400/70 bg-cyan-950/40 text-cyan-200 shadow-md shadow-cyan-950/50'
                      : 'border-white/20 bg-white/10 hover:border-white hover:bg-white hover:text-black text-white font-bold'
                  }`}
                >
                  {bgAudio.isPlaying ? (
                    <>
                      <Pause className="w-4 h-4 text-cyan-400" />
                      <span>暂停背景音乐 // PAUSE</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 ml-0.5 text-white" />
                      <span>播放背景音乐 // PLAY</span>
                    </>
                  )}
                </button>

                <button
                  type="button"
                  onClick={handleRenderWav}
                  disabled={isRenderingWav}
                  className="py-3 px-4 text-xs font-mono tracking-[0.14em] uppercase border border-white/20 bg-white/5 hover:border-white hover:bg-white hover:text-black text-white rounded-xl transition-all flex items-center justify-center gap-2 disabled:opacity-40"
                >
                  {isRenderingWav ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>正在渲染无损 WAV...</span>
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4" />
                      <span>导出当前曲目 WAV</span>
                    </>
                  )}
                </button>
              </div>

              {/* Seamless Background Info Notice */}
              <div className="p-3 bg-white/[0.03] border border-white/10 rounded-xl text-[11px] text-zinc-400 font-sans flex items-center gap-2">
                <Info className="w-4 h-4 text-cyan-400 shrink-0" />
                <span>
                  时代原声为全景深空持续背景音乐，关闭本窗口后音乐在后台继续播放，您可随时在顶栏快速暂停或切换曲目。
                </span>
              </div>
            </>
          ) : (
            <>
              {/* Cloud Lyria Options */}
              <div className="space-y-3">
                <div className="p-3.5 bg-black/50 border border-white/10 rounded-xl flex items-start gap-2.5 text-xs text-zinc-300 font-mono">
                  <Info className="w-4 h-4 text-cyan-400 shrink-0 mt-0.5" />
                  <span>
                    Google Lyria 模型支持利用大模型理解复杂哲学语义并谱写管弦乐章。若 API 权限受限，系统将自动调用内置多频原声引擎无缝兜底。
                  </span>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1.5">
                    SPECIFICATION // 模型规格
                  </label>
                  <div className="grid grid-cols-2 gap-2">
                    <button
                      type="button"
                      onClick={() => setCloudModel('lyria-3-clip-preview')}
                      className={`p-2.5 text-left border rounded-lg font-mono text-xs ${
                        cloudModel === 'lyria-3-clip-preview'
                          ? 'border-white/50 bg-white/10 text-white font-bold'
                          : 'border-white/10 text-zinc-400 hover:border-white/25'
                      }`}
                    >
                      30S CLIP PREVIEW
                    </button>
                    <button
                      type="button"
                      onClick={() => setCloudModel('lyria-3-pro-preview')}
                      className={`p-2.5 text-left border rounded-lg font-mono text-xs ${
                        cloudModel === 'lyria-3-pro-preview'
                          ? 'border-white/50 bg-white/10 text-white font-bold'
                          : 'border-white/10 text-zinc-400 hover:border-white/25'
                      }`}
                    >
                      FULL PRO SYMPHONY
                    </button>
                  </div>
                </div>

                <div>
                  <label className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-1.5">
                    PHILOSOPHICAL PROMPT // 哲学意象提示词
                  </label>
                  <textarea
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    rows={3}
                    className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-xs text-white font-mono focus:outline-none focus:border-cyan-400/80 resize-none leading-relaxed"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleGenerateCloudMusic}
                  disabled={isCloudLoading}
                  className="w-full py-3 px-4 text-xs font-mono tracking-[0.14em] uppercase border border-cyan-400/50 bg-cyan-950/30 hover:bg-cyan-900/50 text-cyan-200 rounded-xl transition-all flex items-center justify-center gap-2 font-bold disabled:opacity-50"
                >
                  {isCloudLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin text-cyan-400" />
                      <span>正在调用 Lyria 神经网络谱曲...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4 text-cyan-400" />
                      <span>生成专属哲学交响乐章</span>
                    </>
                  )}
                </button>

                {cloudStatusMsg && (
                  <p className="text-[11px] font-mono text-zinc-400 text-center">{cloudStatusMsg}</p>
                )}
              </div>
            </>
          )}

          {/* Rendered WAV Download Shelf */}
          {renderedWavUrl && (
            <div className="p-3.5 bg-zinc-900/80 border border-white/20 rounded-xl flex items-center justify-between">
              <div className="flex items-center gap-2 text-xs font-mono">
                <Volume2 className="w-4 h-4 text-cyan-400" />
                <span>WAV 音频就绪 (44.1kHz / 16-bit)</span>
              </div>
              <a
                href={renderedWavUrl}
                download="isms_philosophy_soundtrack.wav"
                className="px-3 py-1.5 text-xs font-mono uppercase bg-white text-black font-bold rounded-lg hover:bg-zinc-200 transition-colors flex items-center gap-1.5"
              >
                <Download className="w-3.5 h-3.5" />
                <span>下载 WAV</span>
              </a>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
