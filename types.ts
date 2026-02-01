
export interface Vector3 {
  x: number;
  y: number;
  z: number;
}

export interface PuzzlePart {
  id: string;
  name: string;
  initialPos: [number, number, number];
  targetPos: [number, number, number];
  dimensions: [number, number, number];
  color: string;
  type: 'box' | 'sphere' | 'cylinder' | 'capsule' | 'group';
  rotation?: [number, number, number];
  subParts?: {
    type: 'box' | 'sphere' | 'cylinder' | 'capsule';
    pos: [number, number, number];
    rot?: [number, number, number];
    dim: [number, number, number];
    color?: string;
  }[];
}

export interface LevelData {
  id: number;
  title: string;
  emoji: string;
  parts: PuzzlePart[];
  background: string;
}

export enum GameState {
  MENU = 'MENU',
  MAP = 'MAP',
  PLAYING = 'PLAYING',
  COMPLETED = 'COMPLETED'
}
