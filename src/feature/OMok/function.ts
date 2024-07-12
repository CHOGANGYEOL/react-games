import { ROW } from './const';

// x,y 좌표를 배열의 index값으로 변환
export const xyToIndex = (x: number, y: number) => {
	return x + y * (ROW + 1);
};

// 배열 index값을 x,y좌표로 변환
export const indexToXy = (i: number, board: number[]) => {
	const w = Math.sqrt(board.length);
	const x = i % w;
	const y = Math.floor(i / w);
	return [x, y];
};
