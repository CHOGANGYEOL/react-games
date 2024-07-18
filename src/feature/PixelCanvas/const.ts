export const ERASER_COLOR = '#ffffff';
export const DEFAULT_BRUSH_COLOR = '#000000';
export const DEFAULT_CANVAS_SIZE = 20;
export const MAX_CANVAS_SIZE = 60;
export const MIN_CANVAS_SIZE = 1;

export const ERROR_MESSAGE = {
	MIN_SIZE: `캔버스 사이즈는 최소 ${String(MIN_CANVAS_SIZE)}부터 가능합니다.`,
	MAX_SIZE: `캔버스 사이즈는 최대 ${String(MAX_CANVAS_SIZE)}까지 가능합니다.`,
} as const;

export const COLOR_LIST = [
	'#D62721',
	'#D2613D',
	'#F5AD24',
	'#4D6C55',
	'#609FBE',
	'#ED6A64',
	'#F49A6F',
	'#F5B945',
	'#5D7756',
	'#88B6CC',
	'#F4827E',
	'#F4B691',
	'#F4CD76',
	'#7F8F67',
	'#96BADD',
] as const;
