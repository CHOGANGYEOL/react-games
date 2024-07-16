export const DINO = {
	x: 10,
	y: 200,
	width: 50,
	height: 50,
} as const;

interface DinoType {
	draw: () => void;
}

export class Dino implements DinoType {
	public x: number;
	public y: number;
	private width: number;
	private height: number;
	private ctx: CanvasRenderingContext2D;
	constructor(ctx: CanvasRenderingContext2D) {
		this.x = 10;
		this.y = 200;
		this.width = 50;
		this.height = 50;
		this.ctx = ctx;
	}
	draw() {
		this.ctx.fillStyle = 'green';
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}

interface CactusType {
	draw: (ctx: CanvasRenderingContext2D) => void;
}

export class Cactus implements CactusType {
	public x: number;
	public y: number;
	private width: number;
	private height: number;
	private ctx: CanvasRenderingContext2D;
	constructor(ctx: CanvasRenderingContext2D) {
		this.x = 500;
		this.y = 200;
		this.width = 50;
		this.height = 50;
		this.ctx = ctx;
	}
	draw() {
		this.ctx.fillStyle = 'red';
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
	}
}
