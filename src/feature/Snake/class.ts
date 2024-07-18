import {
	INITIAL_DX,
	INITIAL_DY,
	INITIAL_MAX_CELLS,
	INITIAL_SNAKE_LENGTH,
	INITIAL_X,
	INITIAL_Y,
	SNAKE_CANVAS_COLUMN,
} from './const';
import { getRandomInt } from './function';
import { Moving, Position } from './type';

export class Snake {
	private x: number;
	private y: number;

	// 매 프레임마다 움직일 거리
	private dx: number;
	private dy: number;

	// snake의 cell을 추적
	public cells: Position[];

	// snake의 길이
	private maxCells: number;

	constructor() {
		this.x = INITIAL_X;
		this.y = INITIAL_Y;
		this.dx = INITIAL_DX;
		this.dy = INITIAL_DY;
		this.cells = [];
		this.maxCells = INITIAL_MAX_CELLS;
	}

	move() {
		this.x += this.dx;
		this.y += this.dy;
	}

	getPosition() {
		const [x, y] = [this.x, this.y];
		return { x, y };
	}

	setPosition({ x, y }: Partial<Position>) {
		if (typeof x === 'number') this.x = x;
		if (typeof y === 'number') this.y = y;
	}

	getMaxCells() {
		const maxCells = this.maxCells;
		return maxCells;
	}

	plusMaxCells() {
		this.maxCells++;
	}

	resetMaxCells() {
		this.maxCells = INITIAL_SNAKE_LENGTH;
	}

	getMoving() {
		const [dx, dy] = [this.dx, this.dy];
		return { dx, dy };
	}

	setMoving({ dx, dy }: Partial<Moving>) {
		if (typeof dx === 'number') this.dx = dx;
		if (typeof dy === 'number') this.dy = dy;
	}

	resetSnake() {
		this.x = INITIAL_X;
		this.y = INITIAL_Y;
		this.dx = INITIAL_DX;
		this.dy = INITIAL_DY;
		this.cells = [];
		this.maxCells = INITIAL_MAX_CELLS;
	}
}

export class Apple {
	private x: number;
	private y: number;

	constructor() {
		this.x = INITIAL_X * 2;
		this.y = INITIAL_Y * 2;
	}

	getPosition() {
		const [x, y] = [this.x, this.y];
		return { x, y };
	}

	changePosition() {
		this.x = getRandomInt(0, 25) * SNAKE_CANVAS_COLUMN;
		this.y = getRandomInt(0, 25) * SNAKE_CANVAS_COLUMN;
	}
}
