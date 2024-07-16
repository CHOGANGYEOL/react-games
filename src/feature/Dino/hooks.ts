import { useCallback, useEffect, useRef } from 'react';

import Cactus from './assets/cactus.png';
import { Villain, Dino } from './class';

export const useDino = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const dinoRef = useRef<Dino | null>(null);
	const villainArr = useRef<Villain[]>([]);
	const frameRef = useRef(0);
	const animationRef = useRef(0);

	const canvasSizeSetting = useCallback(() => {
		if (!canvasRef.current || !wrapperRef.current) return;
		canvasRef.current.width = wrapperRef.current.offsetWidth - 48;
		canvasRef.current.height = wrapperRef.current.offsetWidth - 48;
	}, []);

	useEffect(() => {
		canvasSizeSetting();
		window.addEventListener('resize', canvasSizeSetting);
		return () => {
			window.removeEventListener('resize', canvasSizeSetting);
		};
	}, []);

	useEffect(() => {
		initialSetting();
		Playing();
	}, []);

	const initialSetting = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctxRef.current = ctx;
		dinoRef.current = new Dino(ctx);
	}, []);

	const Playing = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;
		const dino = dinoRef.current;
		if (!ctx || !dino || !canvas) return;

		animationRef.current = requestAnimationFrame(Playing);
		// 시간 초 증가
		frameRef.current += 1;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		if (frameRef.current % 200 === 0) {
			const villain = new Villain(ctx, Cactus);
			villainArr.current.push(villain);
		}

		villainArr.current.forEach((cactus, idx, arr) => {
			// x좌표가 0미만일 경우 제거
			if (cactus.x < 0) arr.splice(idx, 1);
			clashCheck(cactus);
			cactus.move();
		});
		if (dino.isJumping) {
			dino.jump();
		}
		dino.draw();
	}, []);

	const clashCheck = useCallback((villain: Villain): void => {
		const dino = dinoRef.current;
		if (!dino) return;
		const x = villain.x - (dino.x + dino.width);
		const y = villain.y - (dino.y + dino.height);
		if (x < 0 && y < 0) {
			cancelAnimationFrame(animationRef.current);
		}
	}, []);

	document.addEventListener('keydown', (e) => {
		const dino = dinoRef.current;
		if (!dino) return;
		if (e.code === 'Space') {
			dino.isJumping = true;
		}
	});
	document.addEventListener('touchstart', () => {
		const dino = dinoRef.current;
		if (!dino) return;
		dino.isJumping = true;
	});

	return { canvasRef, wrapperRef };
};
