// Type definitions for the Snake Game

export interface SnakePosition {
  x: number;
  y: number;
}

export interface GameState {
  snake: SnakePosition[];
  food: SnakePosition;
  direction: Direction;
  score: number;
  highScore: number;
  gameActive: boolean;
  gameInterval?: NodeJS.Timeout;
}

export interface MousePosition {
  x: number;
  y: number;
}

export type Direction = 'up' | 'down' | 'left' | 'right';

export interface GameConfig {
  canvasWidth: number;
  canvasHeight: number;
  gridSize: number;
  gameSpeed: number;
  scoreIncrement: number;
}

export interface GameElements {
  canvas: HTMLCanvasElement;
  ctx: CanvasRenderingContext2D;
  scoreDisplay: HTMLElement;
  highScoreDisplay: HTMLElement;
  startButton: HTMLButtonElement;
}

// Game event types
export interface GameEvents {
  onGameStart: () => void;
  onGameOver: (finalScore: number) => void;
  onScoreUpdate: (newScore: number) => void;
  onHighScoreUpdate: (newHighScore: number) => void;
}
