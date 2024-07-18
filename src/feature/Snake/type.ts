export type Move = 'UP' | 'DOWN' | 'LEFT' | 'RIGHT';

export interface Position {
	x: number;
	y: number;
}

export interface Moving {
	dx: number;
	dy: number;
}
