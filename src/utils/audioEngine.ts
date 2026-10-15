// High-Performance Web Audio Synthesis & Telemetry Acoustic Feedback Engine
// High reliability: 100% browser-native, zero external network dependency, seamless continuous background music.

import { CategoryType, IsmNode } from '../types/ism';

export interface BackgroundAudioState {
  isPlaying: boolean;
  isMuted: boolean;
  currentTrackId: string;
  currentTrackName: string;
  volume: number;
}

export const BACKGROUND_TRACKS = [
  {
    id: 'philosophical',
    name: '深邃存在主义 // EXISTENTIAL VOID',
    tag: '哲学认识',
    desc: 'D小调次低音长音 (73.4Hz)，空灵九度和声微光，回荡于虚空边界。',
  },
  {
    id: 'rational',
    name: '古典理性秩序 // RATIONAL ORDER',
    tag: '理性启蒙',
    desc: '纯五度级联律动 (C-G-D)，晶莹序列音符，巴赫式严密秩序。',
  },
  {
    id: 'existential',
    name: '虚无主义深渊 // NIHILISTIC HORIZON',
    tag: '虚无解构',
    desc: '43.6Hz 超低频深海下潜，微失谐锯齿波声谷，冷寂宇宙风声。',
  },
  {
    id: 'cultural',
    name: '浪漫主义交响 // ROMANTIC GRANDEUR',
    tag: '文化现代',
    desc: 'F利底亚调式史诗弦乐铺底，宏大和声变幻，时代精神的激昂回响。',
  },
  {
    id: 'contemporary',
    name: '赛博控制论脉冲 // CYBERNETIC PULSE',
    tag: '前沿数字',
    desc: '16分音符模拟合成琶音，立体声相位延迟与高共振扫频滤波。',
  },
  {
    id: 'ethical',
    name: '先验价值纯律 // A PRIORI HARMONY',
    tag: '伦理至善',
    desc: 'E多利亚调式双声道共振，黄金分割对位，正义与至善的肃穆庄严。',
  },
  {
    id: 'nature',
    name: '盖亚生态共鸣 // GAIA RESONANCE',
    tag: '生态自然',
    desc: '528Hz 修复谐波与次声舒曼波波动，自然生命的深沉律动。',
  },
];

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private currentSourceNodes: AudioNode[] = [];
  private analyser: AnalyserNode | null = null;
  private isLivePlaying: boolean = false;

  // Dedicated background master gain for instantaneous mute control
  private bgMasterGain: GainNode | null = null;

  // Background Ambient Music State
  private bgIsPlaying: boolean = false;
  private bgCurrentTrackId: string = 'philosophical';
  private bgVolume: number = 0.22;
  private bgLoopTimer: ReturnType<typeof setTimeout> | null = null;
  private bgListeners: Set<(state: BackgroundAudioState) => void> = new Set();

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx =
        window.AudioContext ||
        (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  /**
   * Set global mute state
   */
  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted) {
      this.pauseBackgroundMusic();
      if (this.ctx && this.bgMasterGain) {
        try {
          this.bgMasterGain.gain.cancelScheduledValues(this.ctx.currentTime);
          this.bgMasterGain.gain.setValueAtTime(0, this.ctx.currentTime);
        } catch {}
      }
    } else {
      if (this.ctx && this.bgMasterGain) {
        try {
          this.bgMasterGain.gain.cancelScheduledValues(this.ctx.currentTime);
          this.bgMasterGain.gain.setValueAtTime(1.0, this.ctx.currentTime);
        } catch {}
      }
      this.playBackgroundMusic();
    }
    this.notifyBackgroundState();
  }

  /**
   * Toggle global audio mute state
   */
  public toggleMute(): boolean {
    const shouldMute = !this.isMuted && this.bgIsPlaying;
    this.setMuted(shouldMute);
    return this.isMuted;
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  public getIsPlaying(): boolean {
    return this.bgIsPlaying && !this.isMuted;
  }

  public subscribeBackgroundState(listener: (state: BackgroundAudioState) => void): () => void {
    this.bgListeners.add(listener);
    listener(this.getBackgroundState());
    return () => this.bgListeners.delete(listener);
  }

  public getBackgroundState(): BackgroundAudioState {
    const track = BACKGROUND_TRACKS.find((t) => t.id === this.bgCurrentTrackId) || BACKGROUND_TRACKS[0];
    return {
      isPlaying: this.bgIsPlaying && !this.isMuted,
      isMuted: this.isMuted,
      currentTrackId: this.bgCurrentTrackId,
      currentTrackName: track.name,
      volume: this.bgVolume,
    };
  }

  private notifyBackgroundState() {
    const state = this.getBackgroundState();
    this.bgListeners.forEach((fn) => fn(state));
  }

  // =========================================================================
  // 1. Multiple Randomized Star Click & Hover Synthesizers (多维随机深空交互音效)
  // =========================================================================

  /**
   * Delicate, ethereal cosmic shimmer when hovering over a star (after 300ms dwell).
   */
  public playStarHover(category?: CategoryType) {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;
      const now = ctx.currentTime;

      let baseF = 1200;
      if (category === 'political') baseF = 980;
      else if (category === 'philosophical') baseF = 1320;
      else if (category === 'cultural') baseF = 1100;
      else if (category === 'ethical') baseF = 1440;
      else if (category === 'contemporary') baseF = 1560;

      const masterGain = ctx.createGain();
      masterGain.gain.setValueAtTime(0.0001, now);
      masterGain.gain.linearRampToValueAtTime(0.022, now + 0.04);
      masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);
      masterGain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(baseF, now);
      osc.frequency.exponentialRampToValueAtTime(baseF * 1.25, now + 0.2);

      osc.connect(masterGain);
      osc.start(now);
      osc.stop(now + 0.22);
    } catch {
      // Audio autoplay policy
    }
  }

  /**
   * Rich, tactile, acoustic star click synthesis.
   * Randomly chooses from 16 distinct cosmic synthesizer algorithms with micro-tuning variation.
   */
  public playStarClick(category?: CategoryType) {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      // 16 distinct cosmic synthesizer types
      const soundType = Math.floor(Math.random() * 16);

      // Micro-random tuning variation (±40 cents) to prevent ear fatigue
      const detuneSemitones = (Math.random() - 0.5) * 0.8;
      const pitchMultiplier = Math.pow(2, detuneSemitones / 12);

      // Base category frequency seed
      let baseF = 880;
      if (category === 'political') baseF = 784;
      else if (category === 'philosophical') baseF = 988;
      else if (category === 'cultural') baseF = 831;
      else if (category === 'ethical') baseF = 1046;
      else if (category === 'contemporary') baseF = 1175;
      baseF *= pitchMultiplier;

      const masterGain = ctx.createGain();
      masterGain.connect(ctx.destination);

      switch (soundType) {
        // 0. Crystal Sparkle Chime (晶莹水晶双音)
        case 0: {
          masterGain.gain.setValueAtTime(0.09, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

          const osc1 = ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(baseF * 1.5, now);
          osc1.frequency.exponentialRampToValueAtTime(baseF * 1.52, now + 0.15);

          const osc2 = ctx.createOscillator();
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(baseF * 2.25, now);

          osc1.connect(masterGain);
          osc2.connect(masterGain);
          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + 0.22);
          osc2.stop(now + 0.16);
          break;
        }

        // 1. Quantum Sonar Ping (量子深空声呐)
        case 1: {
          masterGain.gain.setValueAtTime(0.11, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);

          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(baseF * 1.2, now);
          filter.frequency.exponentialRampToValueAtTime(baseF * 0.6, now + 0.22);
          filter.Q.setValueAtTime(6.0, now);
          filter.connect(masterGain);

          const osc = ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(baseF * 1.1, now);
          osc.frequency.exponentialRampToValueAtTime(baseF * 0.45, now + 0.22);
          osc.connect(filter);

          osc.start(now);
          osc.stop(now + 0.24);
          break;
        }

        // 2. Astral Metallic Bell / FM (星界调频金磬)
        case 2: {
          masterGain.gain.setValueAtTime(0.08, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

          const carrier = ctx.createOscillator();
          carrier.type = 'sine';
          carrier.frequency.setValueAtTime(baseF * 0.9, now);

          const mod = ctx.createOscillator();
          mod.type = 'sine';
          mod.frequency.setValueAtTime(baseF * 0.9 * 2.76, now);

          const modGain = ctx.createGain();
          modGain.gain.setValueAtTime(320, now);
          modGain.gain.exponentialRampToValueAtTime(0.1, now + 0.2);

          mod.connect(modGain);
          modGain.connect(carrier.frequency);

          carrier.connect(masterGain);
          mod.start(now);
          carrier.start(now);
          mod.stop(now + 0.28);
          carrier.stop(now + 0.28);
          break;
        }

        // 3. Deep-Space Harp Pluck (深空以太拨弦)
        case 3: {
          masterGain.gain.setValueAtTime(0.10, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.22);

          const osc = ctx.createOscillator();
          osc.type = 'triangle';
          osc.frequency.setValueAtTime(baseF * 0.75, now);

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(2800, now);
          filter.frequency.exponentialRampToValueAtTime(320, now + 0.18);

          osc.connect(filter);
          filter.connect(masterGain);

          osc.start(now);
          osc.stop(now + 0.22);
          break;
        }

        // 4. Cosmic Water Droplet (太空水滴微鸣)
        case 4: {
          masterGain.gain.setValueAtTime(0.12, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.16);

          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseF * 0.6, now);
          osc.frequency.exponentialRampToValueAtTime(baseF * 1.9, now + 0.09);

          osc.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.16);
          break;
        }

        // 5. Singularity Harmonic Chirp (奇点双频跃迁)
        case 5: {
          masterGain.gain.setValueAtTime(0.085, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.19);

          const osc1 = ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(baseF, now);

          const osc2 = ctx.createOscillator();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(baseF * 2.0, now + 0.035);

          osc1.connect(masterGain);
          osc2.connect(masterGain);
          osc1.start(now);
          osc2.start(now + 0.035);
          osc1.stop(now + 0.14);
          osc2.stop(now + 0.19);
          break;
        }

        // 6. Ethereal Resonant Glass (天体琉璃微震)
        case 6: {
          masterGain.gain.setValueAtTime(0.075, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);

          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseF * 1.33, now);

          const lfo = ctx.createOscillator();
          lfo.frequency.setValueAtTime(8.5, now);
          const lfoGain = ctx.createGain();
          lfoGain.gain.setValueAtTime(0.02, now);
          lfo.connect(lfoGain);

          osc.connect(masterGain);
          lfo.start(now);
          osc.start(now);
          lfo.stop(now + 0.26);
          osc.stop(now + 0.26);
          break;
        }

        // 7. Cybernetic Telemetry Blip (赛博测控电声)
        case 7: {
          masterGain.gain.setValueAtTime(0.09, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);

          const osc = ctx.createOscillator();
          osc.type = 'square';
          osc.frequency.setValueAtTime(baseF * 1.8, now);

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(1800, now);

          osc.connect(filter);
          filter.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.12);
          break;
        }

        // 8. Supernova Micro Sparkle (超新星微耀微光)
        case 8: {
          masterGain.gain.setValueAtTime(0.08, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.24);

          // Fast 3-tone celestial ascending triad
          [1.0, 1.25, 1.5].forEach((mult, i) => {
            const osc = ctx.createOscillator();
            osc.type = 'sine';
            const startTime = now + i * 0.025;
            osc.frequency.setValueAtTime(baseF * mult, startTime);
            osc.connect(masterGain);
            osc.start(startTime);
            osc.stop(startTime + 0.16);
          });
          break;
        }

        // 9. Pulsar Frequency Sweep (脉冲星极频微扫)
        case 9: {
          masterGain.gain.setValueAtTime(0.095, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.18);

          const osc = ctx.createOscillator();
          osc.type = 'sawtooth';
          osc.frequency.setValueAtTime(baseF * 0.5, now);
          osc.frequency.exponentialRampToValueAtTime(baseF * 2.4, now + 0.14);

          const filter = ctx.createBiquadFilter();
          filter.type = 'bandpass';
          filter.frequency.setValueAtTime(baseF * 1.5, now);
          filter.Q.setValueAtTime(8.0, now);

          osc.connect(filter);
          filter.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.18);
          break;
        }

        // 10. Deep Zen Space Gong (禅意深空磬音)
        case 10: {
          masterGain.gain.setValueAtTime(0.12, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.32);

          const osc1 = ctx.createOscillator();
          osc1.type = 'sine';
          osc1.frequency.setValueAtTime(baseF * 0.5, now); // Low fundamental

          const osc2 = ctx.createOscillator();
          osc2.type = 'sine';
          osc2.frequency.setValueAtTime(baseF * 1.502, now); // Metallic overtone

          osc1.connect(masterGain);
          osc2.connect(masterGain);
          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + 0.32);
          osc2.stop(now + 0.24);
          break;
        }

        // 11. Quintic String Resonance (弦理论纯五度谐振)
        case 11: {
          masterGain.gain.setValueAtTime(0.09, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.26);

          const osc1 = ctx.createOscillator();
          osc1.type = 'triangle';
          osc1.frequency.setValueAtTime(baseF, now);

          const osc2 = ctx.createOscillator();
          osc2.type = 'triangle';
          osc2.frequency.setValueAtTime(baseF * 1.5, now); // Perfect 5th

          osc1.connect(masterGain);
          osc2.connect(masterGain);
          osc1.start(now);
          osc2.start(now);
          osc1.stop(now + 0.26);
          osc2.stop(now + 0.24);
          break;
        }

        // 12. Aurora Ionosphere Whistle (极光电离微啸)
        case 12: {
          masterGain.gain.setValueAtTime(0.07, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.25);

          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseF * 1.8, now);
          osc.frequency.linearRampToValueAtTime(baseF * 2.1, now + 0.08);
          osc.frequency.exponentialRampToValueAtTime(baseF * 1.1, now + 0.23);

          osc.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.25);
          break;
        }

        // 13. Ion Drive Crystal Hum (离子推进晶振)
        case 13: {
          masterGain.gain.setValueAtTime(0.085, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.17);

          const osc = ctx.createOscillator();
          osc.type = 'square';
          osc.frequency.setValueAtTime(baseF * 0.75, now);

          const filter = ctx.createBiquadFilter();
          filter.type = 'lowpass';
          filter.frequency.setValueAtTime(900, now);
          filter.frequency.exponentialRampToValueAtTime(200, now + 0.15);

          osc.connect(filter);
          filter.connect(masterGain);
          osc.start(now);
          osc.stop(now + 0.17);
          break;
        }

        // 14. Celestial Kalimba Click (天体卡林巴琴拨音)
        case 14: {
          masterGain.gain.setValueAtTime(0.11, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.21);

          const osc = ctx.createOscillator();
          osc.type = 'sine';
          osc.frequency.setValueAtTime(baseF * 1.25, now);

          const clickOsc = ctx.createOscillator();
          clickOsc.type = 'triangle';
          clickOsc.frequency.setValueAtTime(baseF * 3.5, now);

          osc.connect(masterGain);
          clickOsc.connect(masterGain);
          osc.start(now);
          clickOsc.start(now);
          osc.stop(now + 0.21);
          clickOsc.stop(now + 0.04);
          break;
        }

        // 15. Gravitational Echo Wave (引力透镜重力回响)
        default: {
          masterGain.gain.setValueAtTime(0.12, now);
          masterGain.gain.exponentialRampToValueAtTime(0.0001, now + 0.28);

          const sub = ctx.createOscillator();
          sub.type = 'sine';
          sub.frequency.setValueAtTime(baseF * 0.35, now);

          const shimmer = ctx.createOscillator();
          shimmer.type = 'sine';
          shimmer.frequency.setValueAtTime(baseF * 1.75, now);

          sub.connect(masterGain);
          shimmer.connect(masterGain);
          sub.start(now);
          shimmer.start(now);
          sub.stop(now + 0.28);
          shimmer.stop(now + 0.18);
          break;
        }
      }
    } catch {
      // Audio autoplay policy or device restrictions
    }
  }

  // =========================================================================
  // 2. Persistent Background Ambient Music (时代原声连续背景音引擎)
  // =========================================================================

  /**
   * Toggle background ambient music playing / paused
   */
  public toggleBackgroundMusic(): boolean {
    if (this.bgIsPlaying) {
      this.pauseBackgroundMusic();
      return false;
    } else {
      this.playBackgroundMusic();
      return true;
    }
  }

  /**
   * Start / Resume continuous ambient background music
   */
  public playBackgroundMusic(trackId?: string) {
    this.isMuted = false;
    if (trackId) {
      this.bgCurrentTrackId = trackId;
    }

    this.stopActiveSynthNodes();
    const ctx = this.initContext();
    if (!ctx) return;

    this.bgIsPlaying = true;
    this.isLivePlaying = true;
    this.renderSingleLoopCycle();
    this.notifyBackgroundState();
  }

  /**
   * Pause background ambient music
   */
  public pauseBackgroundMusic() {
    this.bgIsPlaying = false;
    this.isLivePlaying = false;
    if (this.bgLoopTimer) {
      clearTimeout(this.bgLoopTimer);
      this.bgLoopTimer = null;
    }
    this.stopActiveSynthNodes();
    this.notifyBackgroundState();
  }

  /**
   * Switch the current background music track theme
   */
  public switchBackgroundTrack(trackId: string) {
    this.bgCurrentTrackId = trackId;
    if (this.bgIsPlaying) {
      this.playBackgroundMusic(trackId);
    } else {
      this.notifyBackgroundState();
    }
  }

  public setBackgroundVolume(vol: number) {
    this.bgVolume = Math.max(0, Math.min(1, vol));
    this.notifyBackgroundState();
  }

  /**
   * Stop all active Web Audio oscillator nodes currently sounding
   */
  private stopActiveSynthNodes() {
    if (this.ctx && this.bgMasterGain) {
      try {
        this.bgMasterGain.gain.cancelScheduledValues(this.ctx.currentTime);
        this.bgMasterGain.gain.setValueAtTime(0, this.ctx.currentTime);
      } catch {}
    }
    this.currentSourceNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof (node as AudioScheduledSourceNode).stop === 'function') {
          (node as AudioScheduledSourceNode).stop();
        }
        node.disconnect();
      } catch {
        // Ignore already disconnected nodes
      }
    });
    this.currentSourceNodes = [];
  }

  /**
   * Internal generator for one continuous ambient cycle (22s duration)
   * Automatically queues the next cycle seamlessly if bgIsPlaying is true!
   */
  private renderSingleLoopCycle() {
    if (!this.bgIsPlaying || this.isMuted) return;

    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const cycleDuration = 22; // 22s harmonic journey

    // Ensure Analyser is connected for UI waveforms
    if (!this.analyser) {
      this.analyser = ctx.createAnalyser();
      this.analyser.fftSize = 128;
      this.analyser.connect(ctx.destination);
    }

    if (!this.bgMasterGain) {
      this.bgMasterGain = ctx.createGain();
      this.bgMasterGain.connect(this.analyser);
    }
    try {
      this.bgMasterGain.gain.cancelScheduledValues(now);
      this.bgMasterGain.gain.setValueAtTime(1.0, now);
    } catch {}

    const masterGain = ctx.createGain();
    const targetVol = this.bgVolume;
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.linearRampToValueAtTime(targetVol, now + 2.5);
    masterGain.gain.setValueAtTime(targetVol, now + cycleDuration - 3.0);
    masterGain.gain.linearRampToValueAtTime(0.0001, now + cycleDuration);

    masterGain.connect(this.bgMasterGain);
    this.currentSourceNodes.push(masterGain);

    // Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.linearRampToValueAtTime(1300, now + cycleDuration * 0.45);
    filter.frequency.linearRampToValueAtTime(500, now + cycleDuration);
    filter.Q.setValueAtTime(2.8, now);
    filter.connect(masterGain);
    this.currentSourceNodes.push(filter);

    const profile = this.getProfileConfig(null, this.bgCurrentTrackId);

    // Drone 1: Sub Bass (Grounding fundamental frequency)
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(profile.rootFreq / 2, now);
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.38, now);
    subOsc.connect(subGain);
    subGain.connect(filter);
    subOsc.start(now);
    subOsc.stop(now + cycleDuration);
    this.currentSourceNodes.push(subOsc, subGain);

    // Drone 2: Detuned Rich Harmonics with breathing LFO
    profile.frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle vibrato/detune
      const detuneOsc = ctx.createOscillator();
      detuneOsc.frequency.setValueAtTime(0.2 + idx * 0.12, now);
      const detuneGain = ctx.createGain();
      detuneGain.gain.setValueAtTime(3.5, now);
      detuneOsc.connect(detuneGain);
      detuneGain.connect(osc.detune);
      detuneOsc.start(now);
      detuneOsc.stop(now + cycleDuration);
      this.currentSourceNodes.push(detuneOsc, detuneGain);

      const oscGain = ctx.createGain();
      const waveOffset = idx * 1.2;
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.12, now + 1.8 + waveOffset);
      oscGain.gain.setValueAtTime(0.12, now + cycleDuration - 3.2);
      oscGain.gain.linearRampToValueAtTime(0.0001, now + cycleDuration);

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start(now);
      osc.stop(now + cycleDuration);
      this.currentSourceNodes.push(osc, oscGain);
    });

    // Cosmic Arpeggiator / Interstellar Chimes
    profile.arpeggioNotes.forEach((f, i) => {
      const stepTime = now + 1.8 + i * 1.5;
      if (stepTime >= now + cycleDuration - 2.5) return;

      const arpOsc = ctx.createOscillator();
      arpOsc.type = 'sine';
      arpOsc.frequency.setValueAtTime(f, stepTime);

      const arpGain = ctx.createGain();
      arpGain.gain.setValueAtTime(0.0001, stepTime);
      arpGain.gain.linearRampToValueAtTime(0.08, stepTime + 0.05);
      arpGain.gain.exponentialRampToValueAtTime(0.0001, stepTime + 2.4);

      arpOsc.connect(arpGain);
      arpGain.connect(masterGain);
      arpOsc.start(stepTime);
      arpOsc.stop(stepTime + 2.5);
      this.currentSourceNodes.push(arpOsc, arpGain);
    });

    // Schedule next cycle with 2-second crossfade overlap
    const nextCycleDelay = (cycleDuration - 2.0) * 1000;
    this.bgLoopTimer = setTimeout(() => {
      if (this.bgIsPlaying) {
        this.renderSingleLoopCycle();
      }
    }, nextCycleDelay);
  }

  // Backwards compatibility with existing callers
  public startLiveSoundscape(node: IsmNode | null, profileKey?: string, onEnded?: () => void) {
    this.playBackgroundMusic(profileKey || (node ? node.category : 'philosophical'));
  }

  public stopLiveSoundscape() {
    this.pauseBackgroundMusic();
  }

  /**
   * Render high-fidelity stereo WAV audio via OfflineAudioContext
   */
  public async renderOfflineWav(
    node: IsmNode | null,
    profileKey?: string,
    durationSeconds: number = 18
  ): Promise<{ blob: Blob; url: string }> {
    const sampleRate = 44100;
    const length = sampleRate * durationSeconds;
    const offlineCtx = new OfflineAudioContext(2, length, sampleRate);

    const profile = this.getProfileConfig(node, profileKey);

    const masterGain = offlineCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, 0);
    masterGain.gain.linearRampToValueAtTime(0.35, 2.0);
    masterGain.gain.setValueAtTime(0.35, durationSeconds - 2.5);
    masterGain.gain.linearRampToValueAtTime(0.0001, durationSeconds);
    masterGain.connect(offlineCtx.destination);

    const filter = offlineCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, 0);
    filter.frequency.linearRampToValueAtTime(1400, durationSeconds * 0.45);
    filter.frequency.linearRampToValueAtTime(500, durationSeconds);
    filter.connect(masterGain);

    // Sub
    const subOsc = offlineCtx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(profile.rootFreq / 2, 0);
    const subGain = offlineCtx.createGain();
    subGain.gain.setValueAtTime(0.4, 0);
    subOsc.connect(subGain);
    subGain.connect(filter);
    subOsc.start(0);
    subOsc.stop(durationSeconds);

    // Chords
    profile.frequencies.forEach((freq, idx) => {
      const osc = offlineCtx.createOscillator();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, 0);

      const oscGain = offlineCtx.createGain();
      oscGain.gain.setValueAtTime(0.001, 0);
      oscGain.gain.linearRampToValueAtTime(0.12, 1.5 + idx * 0.4);
      oscGain.gain.setValueAtTime(0.12, durationSeconds - 2.5);
      oscGain.gain.linearRampToValueAtTime(0.0001, durationSeconds);

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start(0);
      osc.stop(durationSeconds);
    });

    // Chimes
    profile.arpeggioNotes.forEach((f, i) => {
      const stepTime = 1.5 + i * 1.5;
      if (stepTime >= durationSeconds - 2) return;

      const arpOsc = offlineCtx.createOscillator();
      arpOsc.type = 'sine';
      arpOsc.frequency.setValueAtTime(f, stepTime);

      const arpGain = offlineCtx.createGain();
      arpGain.gain.setValueAtTime(0.0001, stepTime);
      arpGain.gain.linearRampToValueAtTime(0.12, stepTime + 0.04);
      arpGain.gain.exponentialRampToValueAtTime(0.0001, stepTime + 2.4);

      arpOsc.connect(arpGain);
      arpGain.connect(masterGain);
      arpOsc.start(stepTime);
      arpOsc.stop(stepTime + 2.5);
    });

    const renderedBuffer = await offlineCtx.startRendering();
    const wavBlob = this.audioBufferToWav(renderedBuffer);
    const url = URL.createObjectURL(wavBlob);
    return { blob: wavBlob, url };
  }

  private getProfileConfig(node: IsmNode | null, profileKey?: string) {
    const key = profileKey || (node ? node.category : 'philosophical');

    if (key === 'philosophical' || key === 'existential') {
      return {
        rootFreq: 73.42, // D2
        frequencies: [146.83, 220.0, 261.63, 349.23, 440.0],
        arpeggioNotes: [440, 523.25, 587.33, 698.46, 880, 698.46, 587.33, 523.25],
      };
    } else if (key === 'rational' || key === 'political') {
      return {
        rootFreq: 65.41, // C2
        frequencies: [130.81, 196.0, 261.63, 392.0, 523.25],
        arpeggioNotes: [261.63, 329.63, 392.0, 523.25, 659.25, 783.99, 1046.5],
      };
    } else if (key === 'cultural' || key === 'romantic') {
      return {
        rootFreq: 87.31, // F2
        frequencies: [174.61, 261.63, 329.63, 392.0, 523.25],
        arpeggioNotes: [349.23, 440.0, 523.25, 659.25, 698.46, 880.0],
      };
    } else if (key === 'contemporary' || key === 'cyber') {
      return {
        rootFreq: 55.0, // A1
        frequencies: [110.0, 164.81, 220.0, 329.63, 440.0],
        arpeggioNotes: [220, 261.63, 329.63, 392, 440, 523.25, 659.25, 880],
      };
    } else if (key === 'nature') {
      return {
        rootFreq: 66.0, // C2 (Earth frequency)
        frequencies: [132.0, 198.0, 264.0, 396.0, 528.0],
        arpeggioNotes: [264, 330, 396, 528, 660, 528, 396],
      };
    } else {
      return {
        rootFreq: 82.41, // E2
        frequencies: [164.81, 246.94, 329.63, 493.88, 659.25],
        arpeggioNotes: [329.63, 369.99, 440.0, 493.88, 587.33, 659.25, 739.99],
      };
    }
  }

  private audioBufferToWav(buffer: AudioBuffer): Blob {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1;
    const bitDepth = 16;
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;
    const dataLength = buffer.length * blockAlign;
    const bufferLength = 44 + dataLength;

    const arrayBuffer = new ArrayBuffer(bufferLength);
    const view = new DataView(arrayBuffer);

    this.writeString(view, 0, 'RIFF');
    view.setUint32(4, 36 + dataLength, true);
    this.writeString(view, 8, 'WAVE');
    this.writeString(view, 12, 'fmt ');
    view.setUint32(16, 16, true);
    view.setUint16(20, format, true);
    view.setUint16(22, numChannels, true);
    view.setUint32(24, sampleRate, true);
    view.setUint32(28, sampleRate * blockAlign, true);
    view.setUint16(32, blockAlign, true);
    view.setUint16(34, bitDepth, true);
    this.writeString(view, 36, 'data');
    view.setUint32(40, dataLength, true);

    const channels: Float32Array[] = [];
    for (let i = 0; i < numChannels; i++) {
      channels.push(buffer.getChannelData(i));
    }

    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
      for (let channel = 0; channel < numChannels; channel++) {
        let sample = channels[channel][i];
        sample = Math.max(-1, Math.min(1, sample));
        const intSample = sample < 0 ? sample * 0x8000 : sample * 0x7fff;
        view.setInt16(offset, intSample, true);
        offset += 2;
      }
    }

    return new Blob([view], { type: 'audio/wav' });
  }

  private writeString(view: DataView, offset: number, string: string) {
    for (let i = 0; i < string.length; i++) {
      view.setUint8(offset + i, string.charCodeAt(i));
    }
  }
}

export const audioEngine = new AudioEngine();
