export const ERASER_COLOR = '#fff';
export const DEFAULT_BRUSH_COLOR = '#000';
export const DEFAULT_CANVAS_SIZE = 20;
export const MAX_CANVAS_SIZE = 60;
export const MIN_CANVAS_SIZE = 1;

export const ERROR_MESSAGE = {
	MIN_SIZE: `캔버스 사이즈는 최소 ${String(MIN_CANVAS_SIZE)}부터 가능합니다.`,
	MAX_SIZE: `캔버스 사이즈는 최대 ${String(MAX_CANVAS_SIZE)}까지 가능합니다.`,
} as const;
