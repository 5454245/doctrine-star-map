import React, { useState, useRef, useEffect } from 'react';
import { IsmNode } from '../types/ism';
import { audioEngine } from '../utils/audioEngine';
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
  Info 
} from 'lucide-react';

interface MusicGeneratorModalProps {
  currentIsm: IsmNode | null;
  onClose: () => void;
}

const SOUND_PROFILES = [
  {
    id: 'philosophical',
    name: '深邃存在主义 // EXISTENTIAL VOID',
    description: 'D小调次低音长音 (73.4Hz)，空灵九度和声微光，回荡于虚空边界。',
    tag: '哲学与认识',
  },
  {
    id: 'rational',
    name: '古典理性秩序 // RATIONAL ORDER',
    description: '毕达哥拉斯纯五度级联 (C-G-D)，晶莹序列音符，巴赫式严密秩序。',
    tag: '理性与启蒙',
  },
  {
    id: 'existential',
    name: '虚无主义深渊 // NIHILISTIC HORIZON',
    description: '43.6Hz 超低频下潜，失谐锯齿波声谷，冷寂自然风声。',
    tag: '虚无与解构',
  },
  {
    id: 'cultural',
    name: '浪漫主义交响 // ROMANTIC GRANDEUR',
    description: 'F利底亚调式史诗弦乐铺底，宏大和声变幻，时代精神的激昂回响。',
    tag: '文化与现代性',
  },
  {
    id: 'contemporary',
    name: '赛博控制论脉冲 // CYBERNETIC PULSE',
    description: '16分音符模拟合成琶音，立体声相位延迟与高共振扫频滤波。',
    tag: '当代与数字',
  },
  {
    id: 'ethical',
    name: '先验价值纯律 // A PRIORI HARMONY',
    description: 'E多利亚调式双声道共振，黄金分割频率对位，正义与至善的肃穆庄严。',
    tag: '伦理与公理',
  },
];

export const MusicGeneratorModal: React.FC<MusicGeneratorModalProps> = ({
  currentIsm,
  onClose,
}) => {
  const [activeTab, setActiveTab] = useState<'synth' | 'cloud'>('synth');
  const [selectedProfileId, setSelectedProfileId] = useState<string>(() => {
    if (!currentIsm) return 'philosophical';
    if (currentIsm.category === 'political') return 'rational';
    if (currentIsm.category === 'cultural') return 'cultural';
    if (currentIsm.category === 'contemporary') return 'contemporary';
    if (currentIsm.category === 'ethical') return 'ethical';
    return 'philosophical';
  });

  // Synth state
  const [isLivePlaying, setIsLivePlaying] = useState(false);
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

  // Clean up on unmount
  useEffect(() => {
    return () => {
      audioEngine.stopLiveSoundscape();
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

      if (isLivePlaying && analyser) {
        const bufferLength = analyser.frequencyBinCount;
        const dataArray = new Uint8Array(bufferLength);
        analyser.getByteFrequencyData(dataArray);

        const barWidth = (width / bufferLength) * 2.2;
        let x = 0;

        for (let i = 0; i < bufferLength; i++) {
          const barHeight = (dataArray[i] / 255) * (height - 12);
          ctx.fillStyle = i % 4 === 0 ? '#38bdf8' : '#ffffff';
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
        ctx.fillText('STANDBY // READY FOR TRANSMISSION', width / 2, height / 2 + 16);
      }

      animFrameRef.current = requestAnimationFrame(draw);
    };

    animFrameRef.current = requestAnimationFrame(draw);
    return () => {
      if (animFrameRef.current) cancelAnimationFrame(animFrameRef.current);
    };
  }, [isLivePlaying]);

  // Handle live synthesizer toggle
  const toggleLivePlayback = () => {
    if (isLivePlaying) {
      audioEngine.stopLiveSoundscape();
      setIsLivePlaying(false);
    } else {
      audioEngine.startLiveSoundscape(currentIsm, selectedProfileId, () => {
        setIsLivePlaying(false);
      });
      setIsLivePlaying(true);
    }
  };

  // Handle offline WAV export
  const handleRenderWav = async () => {
    setIsRenderingWav(true);
    try {
      if (renderedWavUrl) {
        URL.revokeObjectURL(renderedWavUrl);
        setRenderedWavUrl(null);
      }
      const { url } = await audioEngine.renderOfflineWav(currentIsm, selectedProfileId, 18);
      setRenderedWavUrl(url);
    } catch (err: any) {
      console.error(err);
    } finally {
      setIsRenderingWav(false);
    }
  };

  // Handle Cloud Lyria generation
  const handleCloudGenerate = async () => {
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
        const { url } = await audioEngine.renderOfflineWav(currentIsm, selectedProfileId, 18);
        setRenderedWavUrl(url);
      }
    } catch (err: any) {
      setCloudStatusMsg('云端服务暂时受限，已就绪本地原声引擎。');
      const { url } = await audioEngine.renderOfflineWav(currentIsm, selectedProfileId, 18);
      setRenderedWavUrl(url);
    } finally {
      setIsCloudLoading(false);
    }
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/80 backdrop-blur-md">
      <div className="w-full max-w-xl bg-zinc-950/95 border border-white/10 rounded-2xl shadow-2xl flex flex-col overflow-hidden text-white font-sans">
        {/* Header */}
        <div className="px-6 py-4 border-b border-white/10 flex items-center justify-between shrink-0 bg-black/50">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-white/5 border border-white/10">
              <Radio className="w-4 h-4 text-cyan-400 animate-pulse" />
            </div>
            <div>
              <div className="flex items-center gap-2">
                <h2 className="text-sm font-mono uppercase tracking-[0.2em] text-white font-bold">
                  AUDIO SYNTH // 思想时代原声
                </h2>
                <span className="text-[10px] font-mono px-1.5 py-0.5 rounded bg-white/10 text-white/80 border border-white/15">
                  REV 3.2
                </span>
              </div>
              <p className="text-[11px] font-mono text-zinc-400 mt-0.5">
                NEURAL RESONANCE // MULTI-HARMONIC PHILOSOPHICAL AUDIO
              </p>
            </div>
          </div>
          <button
            onClick={() => {
              audioEngine.stopLiveSoundscape();
              onClose();
            }}
            className="p-2 rounded-lg text-zinc-400 hover:text-white hover:bg-white/10 transition-colors"
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
            <span>多谐波算法合成 (零延迟)</span>
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
            <span>云端 AI 引擎 (Google Lyria)</span>
          </button>
        </div>

        {/* Oscilloscope Visualizer Screen */}
        <div className="px-6 pt-5 pb-3">
          <div className="relative border border-white/10 rounded-xl bg-black/80 p-3 overflow-hidden shadow-inner">
            <div className="flex items-center justify-between text-[10px] font-mono text-zinc-400 mb-1 px-1">
              <span>OSCILLOSCOPE // REAL-TIME SPECTRUM</span>
              <span className="flex items-center gap-1.5">
                <span className={`w-1.5 h-1.5 rounded-full ${isLivePlaying ? 'bg-cyan-400 animate-ping' : 'bg-zinc-600'}`} />
                {isLivePlaying ? 'TRANSMITTING' : 'IDLE'}
              </span>
            </div>
            <canvas ref={canvasRef} width={480} height={70} className="w-full h-[70px] block bg-black/90 rounded-lg" />
          </div>
        </div>

        {/* Main Body */}
        <div className="px-6 pb-6 space-y-4 max-h-[50vh] overflow-y-auto">
          {activeTab === 'synth' ? (
            <>
              {/* Profile Selector */}
              <div>
                <label className="text-[11px] font-mono uppercase tracking-widest text-zinc-400 block mb-2">
                  SELECT HARMONIC PROFILE // 选择思想调式
                </label>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-2.5">
                  {SOUND_PROFILES.map((p) => {
                    const isSelected = selectedProfileId === p.id;
                    return (
                      <button
                        key={p.id}
                        type="button"
                        onClick={() => {
                          setSelectedProfileId(p.id);
                          if (isLivePlaying) {
                            audioEngine.startLiveSoundscape(currentIsm, p.id, () => {
                              setIsLivePlaying(false);
                            });
                          }
                        }}
                        className={`p-3 text-left border rounded-xl transition-all ${
                          isSelected
                            ? 'border-white/50 bg-white/10 text-white shadow-md'
                            : 'border-white/10 bg-black/40 text-zinc-400 hover:border-white/25 hover:text-zinc-200'
                        }`}
                      >
                        <div className="flex items-center justify-between mb-1">
                          <span className="text-xs font-mono font-bold tracking-wider">{p.name.split('//')[0]}</span>
                          <span className="text-[9px] font-mono px-1.5 py-0.5 rounded bg-white/10 border border-white/15 text-zinc-300">
                            {p.tag}
                          </span>
                        </div>
                        <p className="text-[11px] text-zinc-400 leading-snug">{p.description}</p>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Action Buttons: Live Play + Render WAV */}
              <div className="grid grid-cols-2 gap-3 pt-2">
                <button
                  type="button"
                  onClick={toggleLivePlayback}
                  className={`py-3 px-4 text-xs font-mono tracking-[0.14em] uppercase border rounded-xl transition-all flex items-center justify-center gap-2 ${
                    isLivePlaying
                      ? 'border-cyan-400/60 bg-cyan-950/40 text-cyan-200 shadow-md shadow-cyan-950/50'
                      : 'border-white/20 bg-white/5 hover:border-white hover:bg-white hover:text-black text-white'
                  }`}
                >
                  {isLivePlaying ? (
                    <>
                      <Pause className="w-4 h-4 text-cyan-400" />
                      <span>停止实时回响 // STOP</span>
                    </>
                  ) : (
                    <>
                      <Play className="w-4 h-4 ml-0.5" />
                      <span>实时声波试听 // LIVE</span>
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
                      <span>离线渲染多轨 WAV...</span>
                    </>
                  ) : (
                    <>
                      <Activity className="w-4 h-4" />
                      <span>渲染并导出 WAV 档案</span>
                    </>
                  )}
                </button>
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
                    PROMPT // 音乐时代意境描述词
                  </label>
                  <textarea
                    rows={3}
                    value={prompt}
                    onChange={(e) => setPrompt(e.target.value)}
                    className="w-full bg-black/60 border border-white/15 rounded-xl p-3 text-xs text-white placeholder-zinc-500 focus:outline-none focus:border-white font-mono leading-relaxed"
                  />
                </div>

                <button
                  type="button"
                  onClick={handleCloudGenerate}
                  disabled={isCloudLoading || !prompt.trim()}
                  className="w-full py-3 text-xs font-mono uppercase tracking-[0.16em] border border-white/30 bg-white/10 hover:bg-white hover:text-black rounded-xl transition-all flex items-center justify-center gap-2 text-white font-bold disabled:opacity-40"
                >
                  {isCloudLoading ? (
                    <>
                      <RefreshCw className="w-4 h-4 animate-spin" />
                      <span>正在请求云端音频渲染...</span>
                    </>
                  ) : (
                    <>
                      <Sparkles className="w-4 h-4" />
                      <span>触发云端谱写 // COMMENCE AI GENERATION</span>
                    </>
                  )}
                </button>
              </div>
            </>
          )}

          {/* Status Message if any */}
          {cloudStatusMsg && (
            <div className="p-3 bg-zinc-900/80 border border-white/10 rounded-xl text-xs font-mono text-zinc-300">
              {cloudStatusMsg}
            </div>
          )}

          {/* Audio Player Card when WAV is ready */}
          {renderedWavUrl && (
            <div className="p-4 bg-black/60 border border-white/10 rounded-xl space-y-3 font-mono shadow-inner">
              <div className="flex items-center justify-between text-xs">
                <div className="flex items-center gap-2 text-white">
                  <Volume2 className="w-4 h-4 text-cyan-400" />
                  <span className="font-bold">TRANSMISSION READY // 音频文件已生成</span>
                </div>
                <a
                  href={renderedWavUrl}
                  download={`${currentIsm?.id || 'philosophy'}-soundtrack.wav`}
                  className="text-xs text-zinc-300 hover:text-white flex items-center gap-1.5 border border-white/20 rounded-lg px-2.5 py-1 hover:border-white transition-colors"
                >
                  <Download className="w-3.5 h-3.5" />
                  <span>下载 WAV</span>
                </a>
              </div>
              <audio src={renderedWavUrl} controls className="w-full h-8" />
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
