import { Brush } from './types';

export const DEFAULT_BRUSH_COLOR = '#000000';
export const DEFAULT_BRUSH_SIZE = 5;
export const DEFAULT_BRUSH_TYPE: Brush = 'ROUND';

export const BRUSH_OPTIONS: Record<Brush, string> = {
	ROUND: 'ROUND',
	SQUARE: 'SQUARE',
} as const;
