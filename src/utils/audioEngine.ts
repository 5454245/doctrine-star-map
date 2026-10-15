// High-Performance Web Audio Synthesis & Telemetry Acoustic Feedback Engine
// High reliability: 100% browser-native, zero dependencies, zero network failure.

import { CategoryType, IsmNode } from '../types/ism';

class AudioEngine {
  private ctx: AudioContext | null = null;
  private isMuted: boolean = false;
  private currentSourceNodes: AudioNode[] = [];
  private analyser: AnalyserNode | null = null;
  private isLivePlaying: boolean = false;

  private initContext(): AudioContext | null {
    if (typeof window === 'undefined') return null;
    if (!this.ctx) {
      const AudioCtx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
      if (AudioCtx) {
        this.ctx = new AudioCtx();
      }
    }
    if (this.ctx && this.ctx.state === 'suspended') {
      this.ctx.resume().catch(() => {});
    }
    return this.ctx;
  }

  public setMuted(muted: boolean) {
    this.isMuted = muted;
    if (muted && this.isLivePlaying) {
      this.stopLiveSoundscape();
    }
  }

  public getMuted(): boolean {
    return this.isMuted;
  }

  public getAnalyser(): AnalyserNode | null {
    return this.analyser;
  }

  public getIsPlaying(): boolean {
    return this.isLivePlaying;
  }

  /**
   * Crisp, high-tech telemetry acoustic feedback when clicking a star
   */
  public playStarClick(category?: CategoryType) {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;

      // Base frequency tuned by ideological category
      let f1 = 880; // A5
      let f2 = 1320; // E6
      if (category === 'political') {
        f1 = 784; // G5
        f2 = 1174.66; // D6
      } else if (category === 'philosophical') {
        f1 = 987.77; // B5
        f2 = 1479.98; // F#6
      } else if (category === 'cultural') {
        f1 = 830.61; // G#5
        f2 = 1244.51; // D#6
      } else if (category === 'ethical') {
        f1 = 1046.5; // C6
        f2 = 1567.98; // G6
      } else if (category === 'contemporary') {
        f1 = 1174.66; // D6
        f2 = 1760; // A6
      }

      // Master gain
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.08, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.12);
      gain.connect(ctx.destination);

      // Primary crisp tone
      const osc1 = ctx.createOscillator();
      osc1.type = 'sine';
      osc1.frequency.setValueAtTime(f1, now);
      osc1.frequency.exponentialRampToValueAtTime(f1 * 1.05, now + 0.08);
      osc1.connect(gain);
      osc1.start(now);
      osc1.stop(now + 0.12);

      // Secondary overtone ping
      const osc2 = ctx.createOscillator();
      osc2.type = 'triangle';
      osc2.frequency.setValueAtTime(f2, now);
      osc2.connect(gain);
      osc2.start(now);
      osc2.stop(now + 0.09);
    } catch {
      // Audio autoplay policy or device restrictions
    }
  }

  /**
   * Delicate, subtle celestial hover blip when dwelling on a star
   */
  public playNodeHover() {
    if (this.isMuted) return;
    try {
      const ctx = this.initContext();
      if (!ctx) return;

      const now = ctx.currentTime;
      const gain = ctx.createGain();
      gain.gain.setValueAtTime(0.015, now);
      gain.gain.exponentialRampToValueAtTime(0.0001, now + 0.05);
      gain.connect(ctx.destination);

      const osc = ctx.createOscillator();
      osc.type = 'sine';
      osc.frequency.setValueAtTime(1174.66, now);
      osc.connect(gain);
      osc.start(now);
      osc.stop(now + 0.05);
    } catch {
      // Audio autoplay policy or device restrictions
    }
  }

  /**
   * Stop any actively playing live soundscape
   */
  public stopLiveSoundscape() {
    this.currentSourceNodes.forEach((node) => {
      try {
        if ('stop' in node && typeof (node as AudioScheduledSourceNode).stop === 'function') {
          (node as AudioScheduledSourceNode).stop();
        }
        node.disconnect();
      } catch {
        // Ignore already stopped nodes
      }
    });
    this.currentSourceNodes = [];
    this.isLivePlaying = false;
  }

  /**
   * Start procedural live ambient synthesis for the given ism or philosophical theme
   */
  public startLiveSoundscape(
    node: IsmNode | null,
    profileKey?: string,
    onEnded?: () => void
  ) {
    this.stopLiveSoundscape();
    if (this.isMuted) return;

    const ctx = this.initContext();
    if (!ctx) return;

    const now = ctx.currentTime;
    const duration = 24; // 24-second continuous harmonic loop

    // Create Analyser for real-time visualizer
    this.analyser = ctx.createAnalyser();
    this.analyser.fftSize = 128;

    const masterGain = ctx.createGain();
    masterGain.gain.setValueAtTime(0.001, now);
    masterGain.gain.linearRampToValueAtTime(0.2, now + 2.5);
    masterGain.gain.setValueAtTime(0.2, now + duration - 3.5);
    masterGain.gain.linearRampToValueAtTime(0.0001, now + duration);

    masterGain.connect(this.analyser);
    this.analyser.connect(ctx.destination);
    this.currentSourceNodes.push(masterGain);

    // Filter
    const filter = ctx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(450, now);
    filter.frequency.linearRampToValueAtTime(1400, now + duration * 0.45);
    filter.frequency.linearRampToValueAtTime(500, now + duration);
    filter.Q.setValueAtTime(3.2, now);
    filter.connect(masterGain);
    this.currentSourceNodes.push(filter);

    // Chords and root notes according to philosophical profile
    const profile = this.getProfileConfig(node, profileKey);

    // Drone 1: Sub Bass
    const subOsc = ctx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(profile.rootFreq / 2, now);
    const subGain = ctx.createGain();
    subGain.gain.setValueAtTime(0.4, now);
    subOsc.connect(subGain);
    subGain.connect(filter);
    subOsc.start(now);
    subOsc.stop(now + duration);
    this.currentSourceNodes.push(subOsc, subGain);

    // Drone 2: Detuned Rich Harmonics
    profile.frequencies.forEach((freq, idx) => {
      const osc = ctx.createOscillator();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, now);

      // Subtle vibrato/detune
      const detuneOsc = ctx.createOscillator();
      detuneOsc.frequency.setValueAtTime(0.2 + idx * 0.15, now);
      const detuneGain = ctx.createGain();
      detuneGain.gain.setValueAtTime(4.0, now);
      detuneOsc.connect(detuneGain);
      detuneGain.connect(osc.detune);
      detuneOsc.start(now);
      detuneOsc.stop(now + duration);
      this.currentSourceNodes.push(detuneOsc, detuneGain);

      const oscGain = ctx.createGain();
      const waveOffset = idx * 1.5;
      oscGain.gain.setValueAtTime(0.001, now);
      oscGain.gain.linearRampToValueAtTime(0.12, now + 1.5 + waveOffset);
      oscGain.gain.setValueAtTime(0.12, now + duration - 3);
      oscGain.gain.linearRampToValueAtTime(0.0001, now + duration);

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start(now);
      osc.stop(now + duration);
      this.currentSourceNodes.push(osc, oscGain);
    });

    // Cosmic Arpeggiator / Interstellar Chimes
    profile.arpeggioNotes.forEach((f, i) => {
      const stepTime = now + 2 + i * 1.6;
      if (stepTime >= now + duration - 2) return;

      const arpOsc = ctx.createOscillator();
      arpOsc.type = 'sine';
      arpOsc.frequency.setValueAtTime(f, stepTime);

      const arpGain = ctx.createGain();
      arpGain.gain.setValueAtTime(0.0001, stepTime);
      arpGain.gain.linearRampToValueAtTime(0.1, stepTime + 0.05);
      arpGain.gain.exponentialRampToValueAtTime(0.0001, stepTime + 2.0);

      arpOsc.connect(arpGain);
      arpGain.connect(masterGain);
      arpOsc.start(stepTime);
      arpOsc.stop(stepTime + 2.2);
      this.currentSourceNodes.push(arpOsc, arpGain);
    });

    this.isLivePlaying = true;

    // Timeout to cleanup when finished
    setTimeout(() => {
      if (this.isLivePlaying) {
        this.stopLiveSoundscape();
        onEnded?.();
      }
    }, duration * 1000);
  }

  /**
   * Render high-fidelity stereo WAV audio via OfflineAudioContext
   * Returns a downloadable audio Blob and Object URL.
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

    // Master
    const masterGain = offlineCtx.createGain();
    masterGain.gain.setValueAtTime(0.001, 0);
    masterGain.gain.linearRampToValueAtTime(0.35, 2.0);
    masterGain.gain.setValueAtTime(0.35, durationSeconds - 2.5);
    masterGain.gain.linearRampToValueAtTime(0.0001, durationSeconds);
    masterGain.connect(offlineCtx.destination);

    // Filter
    const filter = offlineCtx.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(380, 0);
    filter.frequency.linearRampToValueAtTime(1500, durationSeconds * 0.5);
    filter.frequency.linearRampToValueAtTime(420, durationSeconds);
    filter.Q.setValueAtTime(3.5, 0);
    filter.connect(masterGain);

    // Sub Bass
    const subOsc = offlineCtx.createOscillator();
    subOsc.type = 'sine';
    subOsc.frequency.setValueAtTime(profile.rootFreq / 2, 0);
    const subGain = offlineCtx.createGain();
    subGain.gain.setValueAtTime(0.45, 0);
    subOsc.connect(subGain);
    subGain.connect(filter);
    subOsc.start(0);
    subOsc.stop(durationSeconds);

    // Harmonic layers
    profile.frequencies.forEach((freq, idx) => {
      const osc = offlineCtx.createOscillator();
      osc.type = idx % 2 === 0 ? 'triangle' : 'sine';
      osc.frequency.setValueAtTime(freq, 0);

      const oscGain = offlineCtx.createGain();
      oscGain.gain.setValueAtTime(0.001, 0);
      oscGain.gain.linearRampToValueAtTime(0.15, 1.5 + idx * 0.6);
      oscGain.gain.setValueAtTime(0.15, durationSeconds - 2.5);
      oscGain.gain.linearRampToValueAtTime(0.0001, durationSeconds);

      osc.connect(oscGain);
      oscGain.connect(filter);
      osc.start(0);
      osc.stop(durationSeconds);
    });

    // Chimes / Arpeggio
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

    // Render buffer
    const renderedBuffer = await offlineCtx.startRendering();

    // Convert AudioBuffer to WAV blob
    const wavBlob = this.audioBufferToWav(renderedBuffer);
    const url = URL.createObjectURL(wavBlob);
    return { blob: wavBlob, url };
  }

  private getProfileConfig(node: IsmNode | null, profileKey?: string) {
    const key = profileKey || (node ? node.category : 'philosophical');

    if (key === 'philosophical' || key === 'existential') {
      // D minor / Aeolian contemplation
      return {
        rootFreq: 73.42, // D2
        frequencies: [146.83, 220.0, 261.63, 349.23, 440.0], // D3, A3, C4, F4, A4
        arpeggioNotes: [440, 523.25, 587.33, 698.46, 880, 698.46, 587.33, 523.25],
      };
    } else if (key === 'rational' || key === 'political') {
      // C major / Pythagorean clean fifths
      return {
        rootFreq: 65.41, // C2
        frequencies: [130.81, 196.0, 261.63, 392.0, 523.25], // C3, G3, C4, G4, C5
        arpeggioNotes: [261.63, 329.63, 392.0, 523.25, 659.25, 783.99, 1046.5],
      };
    } else if (key === 'cultural' || key === 'romantic') {
      // F Lydian / Grandeur
      return {
        rootFreq: 87.31, // F2
        frequencies: [174.61, 261.63, 329.63, 392.0, 523.25], // F3, C4, E4, G4, C5
        arpeggioNotes: [349.23, 440.0, 523.25, 659.25, 698.46, 880.0],
      };
    } else if (key === 'contemporary' || key === 'cyber') {
      // A minor / Cybernetic Pulse
      return {
        rootFreq: 55.0, // A1
        frequencies: [110.0, 164.81, 220.0, 329.63, 440.0], // A2, E3, A3, E4, A4
        arpeggioNotes: [220, 261.63, 329.63, 392, 440, 523.25, 659.25, 880],
      };
    } else {
      // E Dorian / Universal Harmony
      return {
        rootFreq: 82.41, // E2
        frequencies: [164.81, 246.94, 329.63, 493.88, 659.25], // E3, B3, E4, B4, E5
        arpeggioNotes: [329.63, 369.99, 440.0, 493.88, 587.33, 659.25, 739.99],
      };
    }
  }

  // AudioBuffer to PCM WAV format writer
  private audioBufferToWav(buffer: AudioBuffer): Blob {
    const numChannels = buffer.numberOfChannels;
    const sampleRate = buffer.sampleRate;
    const format = 1; // PCM
    const bitDepth = 16;
    const bytesPerSample = bitDepth / 8;
    const blockAlign = numChannels * bytesPerSample;

    const dataLength = buffer.length * blockAlign;
    const bufferLength = 44 + dataLength;

    const arrayBuffer = new ArrayBuffer(bufferLength);
    const view = new DataView(arrayBuffer);

    // RIFF identifier
    this.writeString(view, 0, 'RIFF');
    // RIFF chunk length
    view.setUint32(4, 36 + dataLength, true);
    // RIFF type
    this.writeString(view, 8, 'WAVE');
    // format chunk identifier
    this.writeString(view, 12, 'fmt ');
    // format chunk length
    view.setUint32(16, 16, true);
    // sample format (raw)
    view.setUint16(20, format, true);
    // channel count
    view.setUint16(22, numChannels, true);
    // sample rate
    view.setUint32(24, sampleRate, true);
    // byte rate (sample rate * block align)
    view.setUint32(28, sampleRate * blockAlign, true);
    // block align (channel count * bytes per sample)
    view.setUint16(32, blockAlign, true);
    // bits per sample
    view.setUint16(34, bitDepth, true);
    // data chunk identifier
    this.writeString(view, 36, 'data');
    // data chunk length
    view.setUint32(40, dataLength, true);

    // Write interleaved audio PCM samples
    const channels: Float32Array[] = [];
    for (let i = 0; i < numChannels; i++) {
      channels.push(buffer.getChannelData(i));
    }

    let offset = 44;
    for (let i = 0; i < buffer.length; i++) {
      for (let channel = 0; channel < numChannels; channel++) {
        let sample = channels[channel][i];
        // clamp
        sample = Math.max(-1, Math.min(1, sample));
        // convert float to 16-bit signed PCM integer
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
