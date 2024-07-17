// export const MARGIN = 30;
// export const STONE_SIZE = 13; // 바둑돌 크기
export const ROW = 18; // 바둑판 선 개수
export const BOARD_COLOR = '#e38d00'; // background 컬러
export const STROKE_COLOR = '#000';
export const RECT_COLOR = 'red'; // 마지막 클릭자 color;
export const MARGIN = 15;

export const CHECK_DIRECTION = [
	[1, -1],
	[1, 0],
	[1, 1],
	[0, 1],
	[-1, 1],
	[-1, 0],
	[-1, -1],
	[0, -1],
] as const;
