
class AudioService {
  private context: AudioContext | null = null;
  private _isMuted: boolean = false;

  constructor() {
    // Load mute state from local storage if available
    try {
      this._isMuted = localStorage.getItem('isMuted') === 'true';
    } catch (e) { }
  }

  isMuted() {
    return this._isMuted;
  }

  toggleMute() {
    this._isMuted = !this._isMuted;
    localStorage.setItem('isMuted', String(this._isMuted));

    if (this._isMuted) {
      this.stopBackgroundMusic();
      // Also suspend context to mute SFX if desired, but usually just music is fine.
      // For "Sound Off" usually implies everything. 
      // If we want just Music reset, keeping context allows SFX. 
      // Let's assume Mute = Silence Everything for a "Sound Off" button.
      if (this.context && this.context.state === 'running') this.context.suspend();
    } else {
      if (this.context && this.context.state === 'suspended') this.context.resume();
      this.startBackgroundMusic();
    }
    return this._isMuted;
  }

  private initContext() {
    if (!this.context) {
      this.context = new (window.AudioContext || (window as any).webkitAudioContext)();
    }
    // Only resume if not muted
    if (this.context.state === 'suspended' && !this._isMuted) {
      this.context.resume();
    }
  }

  private snapScaleIndex = 0;
  // A Minor Pentatonic Scale (High octave) - "Magical Chime"
  private snapScale = [880.00, 1046.50, 1174.66, 1318.51, 1567.98, 1760.00];

  playSnapSound() {
    this.initContext();
    if (!this.context) return;

    const start = this.context.currentTime;
    // Cycle through scale
    const freq = this.snapScale[this.snapScaleIndex % this.snapScale.length];
    this.snapScaleIndex++;

    // Celesta Tone (Sine wave with bell envelope)
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, start);

    gain.gain.setValueAtTime(0, start);
    gain.gain.linearRampToValueAtTime(0.3, start + 0.01); // Quick attack
    gain.gain.exponentialRampToValueAtTime(0.001, start + 0.6); // Short bell ring

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start(start);
    osc.stop(start + 0.7);
  }

  playClickSound() {
    this.initContext();
    if (!this.context) return;

    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'triangle';
    osc.frequency.setValueAtTime(150, this.context.currentTime);

    gain.gain.setValueAtTime(0.1, this.context.currentTime);
    gain.gain.exponentialRampToValueAtTime(0.01, this.context.currentTime + 0.05);

    osc.connect(gain);
    gain.connect(this.context.destination);

    osc.start();
    osc.stop(this.context.currentTime + 0.05);
  }

  playCompleteSound() {
    this.initContext();
    if (!this.context) return;

    const now = this.context.currentTime;
    const masterGain = this.context.createGain();
    masterGain.gain.setValueAtTime(0.5, now);
    masterGain.connect(this.context.destination);

    // "Universal Success" - A sophisticated, harp-like chime
    // Uses Triangle waves for a soft, pleasant, marimba-like quality
    const playChime = (freq: number, startTime: number, loudness: number) => {
      const osc = this.context!.createOscillator();
      const gain = this.context!.createGain();

      osc.type = 'triangle'; // Softer than sawtooth, perfect for "pleasant" sounds
      osc.frequency.setValueAtTime(freq, startTime);

      // Smooth Envelope (Pluck)
      gain.gain.setValueAtTime(0, startTime);
      gain.gain.linearRampToValueAtTime(loudness, startTime + 0.02); // Quick but soft attack
      gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.5); // Long graceful resonance

      osc.connect(gain);
      gain.connect(masterGain);

      osc.start(startTime);
      osc.stop(startTime + 1.5);
    };

    // A rich, warm sweep upwards (Pentatonic Major scale - universally pleasant)
    // C Major 9 vibe for a sophisticated "adult" appeal

    // The Sweep (Harp strum)
    const speed = 0.05;
    playChime(261.63, now, 0.3);        // C4
    playChime(329.63, now + speed, 0.3); // E4
    playChime(392.00, now + speed * 2, 0.3); // G4
    playChime(493.88, now + speed * 3, 0.25); // B4 (Major 7th - adds "classy" feel)
    playChime(523.25, now + speed * 4, 0.25); // C5
    playChime(659.25, now + speed * 5, 0.2); // E5

    // The Resolution Chord (Landing nicely together)
    const landTime = now + speed * 6;
    playChime(783.99, landTime, 0.4); // G5 (Top sparkle)
    playChime(523.25, landTime, 0.3); // C5 (Root anchor)
    playChime(329.63, landTime, 0.3); // E4 (Lower warmth)

    // Subtle sparkly overtone (Sine wave)
    const sparkle = this.context.createOscillator();
    const sparkleGain = this.context.createGain();
    sparkle.type = 'sine';
    sparkle.frequency.setValueAtTime(1046.50, landTime); // C6
    sparkleGain.gain.setValueAtTime(0, landTime);
    sparkleGain.gain.linearRampToValueAtTime(0.1, landTime + 0.05);
    sparkleGain.gain.exponentialRampToValueAtTime(0.001, landTime + 1.0);
    sparkle.connect(sparkleGain);
    sparkleGain.connect(masterGain);
    sparkle.start(landTime);
    sparkle.stop(landTime + 1.0);
  }
  private bgmOscillators: { osc: OscillatorNode, gain: GainNode }[] = [];
  private isBgmPlaying: boolean = false;
  private nextNoteTime: number = 0;
  private timerID: any = null;
  private currentChordIndex: number = 0;
  // "Zen Garden" Ambient Generator
  // Uses a gentle pentatonic scale with random harmonious intervals to create an endless, non-repetitive flow.
  private scale = [
    261.63, // C4
    293.66, // D4
    329.63, // E4
    392.00, // G4
    440.00, // A4
    523.25, // C5
    587.33, // D5
    659.25, // E5
    783.99, // G5
    880.00  // A5
  ];

  startBackgroundMusic() {
    if (this.isBgmPlaying || this._isMuted) return; // Don't start if muted
    this.initContext();
    if (!this.context) return;

    this.isBgmPlaying = true;
    this.nextNoteTime = this.context.currentTime + 0.1;
    this.currentChordIndex = 0;
    this.scheduleMusic();
  }

  stopBackgroundMusic() {
    this.isBgmPlaying = false;
    if (this.timerID) clearTimeout(this.timerID);
    this.bgmOscillators.forEach(({ osc, gain }) => {
      try {
        gain.gain.setTargetAtTime(0, this.context!.currentTime, 0.5); // Fade out
        osc.stop(this.context!.currentTime + 1);
      } catch (e) { }
    });
    this.bgmOscillators = [];
    if (this.masterGain) {
      this.masterGain.disconnect();
      this.masterGain = null;
    }
    if (this.reverbNode) {
      this.reverbNode.disconnect();
      this.reverbNode = null;
    }
  }

  // "Duomo Di Milano" - Majestic Cathedral Engine
  // Simulates a large pipe organ + reverb for a grand, classical feel.

  private reverbNode: ConvolverNode | null = null;
  private masterGain: GainNode | null = null;

  // Hymn-like Chord Progression (Majestic & Emotional)
  // Dm - Bb - F - C - Gm - Dm - Asus4 - A7
  private cathedralChords = [
    [293.66, 349.23, 440.00], // Dm (D4, F4, A4)
    [233.08, 293.66, 349.23], // Bb (Bb3, D4, F4)
    [174.61, 261.63, 349.23], // F (F3, C4, F4)
    [261.63, 329.63, 392.00], // C (C4, E4, G4)
    [196.00, 233.08, 293.66], // Gm (G3, Bb3, D4)
    [293.66, 349.23, 440.00], // Dm
    [220.00, 293.66, 329.63], // Asus4 (A3, D4, E4) - Tension
    [220.00, 277.18, 329.63, 440.00]  // A Major (A3, C#4, E4, A4) - Resolution
  ];

  /* --- REVERB & MASTERING --- */
  private initReverb() {
    if (!this.context || this.reverbNode) return;

    const sampleRate = this.context.sampleRate;
    const length = 2.5; // Slightly shorter for clarity
    const impulse = this.context.createBuffer(2, sampleRate * length, sampleRate);
    const left = impulse.getChannelData(0);
    const right = impulse.getChannelData(1);

    for (let i = 0; i < sampleRate * length; i++) {
      const reverse = 1 - i / (sampleRate * length);
      // Smoother reverb tail (less noise burst)
      left[i] = (Math.random() * 2 - 1) * Math.pow(reverse, 2) * 0.5;
      right[i] = (Math.random() * 2 - 1) * Math.pow(reverse, 2) * 0.5;
    }

    this.reverbNode = this.context.createConvolver();
    this.reverbNode.buffer = impulse;

    // Master Compressor to prevent "crackling" (Clipping)
    const compressor = this.context.createDynamicsCompressor();
    compressor.threshold.value = -24;
    compressor.knee.value = 30;
    compressor.ratio.value = 12;
    compressor.attack.value = 0.003;
    compressor.release.value = 0.25;

    this.masterGain = this.context.createGain();
    this.masterGain.gain.value = 0.6; // Boost slightly as compressor handles peaks

    // Chain: Sources -> Reverb -> Compressor -> Master -> Out
    this.reverbNode.connect(compressor);
    compressor.connect(this.masterGain);
    this.masterGain.connect(this.context.destination);
  }

  // "Magical Waltz" Engine
  // Style: Movie Soundtrack / Puzzle Game (Harry Potter / Amelie vibe)
  // Time Signature: 3/4 (Waltz) - ONE da da, ONE da da

  // Progression: Am - F - Dm - E (Mysterious & Magical)
  private waltzChords = [
    [220.00, 261.63, 329.63], // Am
    [174.61, 220.00, 261.63], // F 
    [293.66, 349.23, 440.00], // Dm
    [329.63, 415.30, 493.88]  // E Major (Tension)
  ];

  private scheduleMusic() {
    if (!this.isBgmPlaying || !this.context) return;
    this.initReverb();

    // Tempo: 140 BPM (Waltz is fast!) -> 1 beat = 0.42s
    // 1 Bar = 3 beats = 1.26s
    const beatLen = 0.42;
    const lookAhead = 1.0;

    if (this.nextNoteTime < this.context.currentTime) {
      this.nextNoteTime = this.context.currentTime + 0.1;
    }

    while (this.nextNoteTime < this.context.currentTime + lookAhead) {
      this.playWaltzBar(this.nextNoteTime, beatLen);
      this.nextNoteTime += beatLen * 3;
      this.currentChordIndex = (this.currentChordIndex + 1) % this.waltzChords.length;
    }

    this.timerID = setTimeout(() => this.scheduleMusic(), 500);
  }

  private playWaltzBar(startTime: number, beatLen: number) {
    if (!this.context) return;
    const chord = this.waltzChords[this.currentChordIndex];
    const root = chord[0];

    // Beat 1: The DOWNBEAT (Bass) - Heavy Pizzicato
    this.playPizzicato(root / 2, startTime, 0.4, true);

    // Beat 2: The Chord (Violins) - Light Pizzicato
    this.playStrum(chord, startTime + beatLen, 0.15);

    // Beat 3: The Chord (Violins) - Light Pizzicato
    this.playStrum(chord, startTime + beatLen * 2, 0.12);

    // Melody: Random Celesta notes weaving through
    // Play on random 8th note subdivisions for a "magical sparkle" feel
    const scale = [root, chord[1], chord[2], root * 2, chord[1] * 2]; // Pentatonic-ish subset

    // Try to play a melody note on Beat 1 (with Bass)
    if (Math.random() > 0.3) {
      const note = scale[Math.floor(Math.random() * scale.length)] * 2;
      this.playCelesta(note, startTime, 0.1);
    }

    // Try to play on Beat 2.5 (Offbeat)
    if (Math.random() > 0.4) {
      const note = scale[Math.floor(Math.random() * scale.length)] * 2;
      this.playCelesta(note, startTime + beatLen * 1.5, 0.08);
    }

    // Try to play on Beat 3 (End of bar)
    if (Math.random() > 0.5) {
      const note = scale[Math.floor(Math.random() * scale.length)] * 2;
      this.playCelesta(note, startTime + beatLen * 2, 0.08);
    }
  }

  private playStrum(chord: number[], startTime: number, volume: number) {
    chord.forEach((freq, i) => {
      // Strum effect (very fast arpeggio)
      this.playPizzicato(freq, startTime + i * 0.02, volume);
    });
  }

  // Short, sharp string pluck
  private playPizzicato(freq: number, startTime: number, volume: number, isBass: boolean = false) {
    if (!this.context || !this.reverbNode) return;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = isBass ? 'square' : 'sawtooth';
    osc.frequency.setValueAtTime(freq, startTime);

    // Filter is crucial for strings
    const filter = this.context.createBiquadFilter();
    filter.type = 'lowpass';
    filter.frequency.setValueAtTime(isBass ? 600 : 2000, startTime);
    filter.frequency.exponentialRampToValueAtTime(isBass ? 200 : 500, startTime + 0.2);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.005);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + (isBass ? 0.3 : 0.15)); // Very short decay

    osc.connect(filter);
    filter.connect(gain);
    gain.connect(this.reverbNode);
    osc.start(startTime);
    osc.stop(startTime + 0.4);
  }

  // Bell-like "Music Box" sound
  private playCelesta(freq: number, startTime: number, volume: number) {
    if (!this.context || !this.masterGain) return;
    const osc = this.context.createOscillator();
    const gain = this.context.createGain();

    osc.type = 'sine';
    osc.frequency.setValueAtTime(freq, startTime);

    gain.gain.setValueAtTime(0, startTime);
    gain.gain.linearRampToValueAtTime(volume, startTime + 0.01);
    gain.gain.exponentialRampToValueAtTime(0.001, startTime + 1.0);

    osc.connect(gain);
    gain.connect(this.masterGain); // Celesta is cleaner, less reverb
    osc.start(startTime);
    osc.stop(startTime + 1.0);
  }

}

export const audioService = new AudioService();
