import DinoImage from './assets/dino.png';

class Object {
	protected x: number;
	protected y: number;
	private width: number;
	private height: number;
	public image: HTMLImageElement;
	protected ctx: CanvasRenderingContext2D;

	constructor(ctx: CanvasRenderingContext2D, x: number, y: number, image: string) {
		this.ctx = ctx;
		this.x = x;
		this.y = y;
		this.image = new Image();
		this.image.src = image;
		this.width = this.image.width;
		this.height = this.image.height;
	}

	public getSize() {
		const width = this.width;
		const height = this.height;
		return { width, height };
	}

	public getPosition() {
		const x = this.x;
		const y = this.y;
		return { x, y };
	}
	public getImage() {
		const image = this.image;
		return image;
	}
}

interface DinoType {
	draw: () => void;
	jump: (speed: number) => void;
}

export class Dino extends Object implements DinoType {
	public isJumping: boolean;
	private isUp: boolean;
	private jumpTimer: number;

	constructor(ctx: CanvasRenderingContext2D) {
		super(ctx, 10, 200, DinoImage);

		this.isJumping = false;
		this.isUp = true;
		this.jumpTimer = 0;
		this.draw();
	}
	draw() {
		this.ctx.drawImage(this.image, this.x, this.y);
	}
	private up(speed: number) {
		if (this.jumpTimer >= 100) {
			this.isUp = false;
		} else {
			this.y = this.y - speed;
			this.jumpTimer = this.jumpTimer + speed;
		}
	}

	private down(speed: number) {
		if (this.y >= 200) {
			this.isUp = true;
			this.isJumping = false;
		} else {
			this.y = this.y + speed;
			this.jumpTimer = this.jumpTimer - speed;
		}
	}

	jump(speed: number) {
		if (!this.isUp) {
			this.down(speed);
		}
		if (this.isUp) {
			this.up(speed);
		}
	}
}

interface VillainType {
	draw: () => void;
	move: (speed: number) => void;
}

export class Villain extends Object implements VillainType {
	constructor(ctx: CanvasRenderingContext2D, imageUrl: string, respawnPosition: number, y: number) {
		super(ctx, respawnPosition, y, imageUrl);
	}
	draw() {
		this.ctx.drawImage(this.image, this.x, this.y);
	}
	move(speed: number) {
		this.x = this.x - speed;
		this.draw();
	}
}
