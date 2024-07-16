import DinoImage from './assets/dino.png';

interface DinoType {
	draw: () => void;
	jump: () => void;
}

export class Dino implements DinoType {
	public x: number;
	public y: number;
	public width: number;
	public height: number;
	private ctx: CanvasRenderingContext2D;
	private image: HTMLImageElement;

	public isJumping: boolean;
	private isUp: boolean;
	private jumpTimer: number;

	constructor(ctx: CanvasRenderingContext2D) {
		this.x = 10;
		this.y = 200;
		this.width = 50;
		this.height = 50;
		this.ctx = ctx;
		this.image = new Image();
		this.image.src = DinoImage;

		this.isJumping = false;
		this.isUp = true;
		this.jumpTimer = 0;
	}
	draw() {
		// this.ctx.fillStyle = 'white';
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.drawImage(this.image, this.x, this.y);
	}
	private up() {
		if (this.jumpTimer >= 100) {
			this.isUp = false;
		} else {
			this.y--;
			this.jumpTimer++;
		}
	}

	private down() {
		if (this.y === 200) {
			this.isUp = true;
			this.isJumping = false;
		} else {
			this.y++;
			this.jumpTimer--;
		}
	}

	jump() {
		if (!this.isUp) {
			this.down();
		}
		if (this.isUp) {
			this.up();
		}
	}
}

interface VillainType {
	draw: () => void;
	move: () => void;
}

export class Villain implements VillainType {
	public x: number;
	public y: number;
	private width: number;
	private height: number;
	private ctx: CanvasRenderingContext2D;
	private image: HTMLImageElement;
	constructor(ctx: CanvasRenderingContext2D, imageUrl: string, respawnPosition: number) {
		this.image = new Image();
		this.image.src = imageUrl;
		this.x = respawnPosition;
		this.y = 200;
		this.width = this.image.width;
		this.height = this.image.height;
		this.ctx = ctx;
	}
	draw() {
		// this.ctx.fillStyle = 'red';
		this.ctx.fillRect(this.x, this.y, this.width, this.height);
		this.ctx.drawImage(this.image, this.x, this.y);
	}
	move() {
		this.x--;
		this.draw();
	}
}
