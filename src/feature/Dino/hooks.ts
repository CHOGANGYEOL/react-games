import { useCallback, useEffect, useRef } from 'react';

import { Cactus, Dino } from './const';

export const useDino = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);

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

	const Playing = () => {
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;

		const dino = new Dino(ctx);
		dino.draw();

		const cactus = new Cactus(ctx);
		cactus.draw();
		frameStart(ctx, dino, cactus);
	};

	const frameStart = useCallback((ctx: CanvasRenderingContext2D, dino: Dino, cactus: Cactus) => {
		requestAnimationFrame(() => {
			frameStart(ctx, dino, cactus);
		});
		if (!canvasRef.current) return;
		ctx.clearRect(0, 0, canvasRef.current.width, canvasRef.current.height);
		dino.x++;
		dino.draw();
	}, []);

	useEffect(() => {
		Playing();
	}, []);

	return { canvasRef, wrapperRef };
};
