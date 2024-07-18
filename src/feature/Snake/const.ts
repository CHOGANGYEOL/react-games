import { Move } from './type';

export const SNAKE_CANVAS_COLUMN = 16;
export const INITIAL_SNAKE_LENGTH = 4;
export const INITIAL_X = 160;
export const INITIAL_Y = 160;
export const INITIAL_DX = SNAKE_CANVAS_COLUMN;
export const INITIAL_DY = 0;
export const INITIAL_MAX_CELLS = INITIAL_SNAKE_LENGTH;

export const MOVE_KEYS: Record<Move, string> = {
	UP: 'ArrowUp',
	DOWN: 'ArrowDown',
	LEFT: 'ArrowLeft',
	RIGHT: 'ArrowRight',
} as const;

/**
 * 길이 별 스피드 (fps)
 */
export const NEXT_SPEED_TO_LENGTH: Record<number, number> = {
	4: 30,
	5: 30,
	6: 24,
	7: 24,
	8: 20,
	9: 20,
	10: 16,
	11: 16,
	12: 16,
	13: 16,
	14: 14,
};

export const MAX_SPEED = 12;
