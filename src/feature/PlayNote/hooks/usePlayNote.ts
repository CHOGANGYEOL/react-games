import { useCallback, useEffect, useRef } from 'react';

import useHandleNotes from './useHandleNotes';
import Theme from '../../../lib/styledComponents/Theme';
import { BLACK_NOTES, CANVAS_SIZE, NOTE_SIZE, NOTES } from '../const';
import { drawRoundedRect } from '../function';

const usePlayNote = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const { activeNotes, oct } = useHandleNotes(canvasRef.current);

	useEffect(() => {
		initialSetting();
		onDraw();
	}, [activeNotes]);

	const initialSetting = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctxRef.current = ctx;
		canvas.width = CANVAS_SIZE.WIDTH;
		canvas.height = CANVAS_SIZE.HEIGHT;
	}, []);

	const onDraw = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;
		if (!canvas || !ctx) return;
		requestAnimationFrame(onDraw);
		const { height } = canvas;

		// 라인 그리기
		for (let i = 0; i < NOTES.length; i++) {
			const x = i * NOTE_SIZE.WIDTH;
			ctx.fillStyle = Theme.colors.gray[400];
			ctx.strokeStyle = Theme.colors.gray[400];
			drawRoundedRect(ctx, x, 0, NOTE_SIZE.WIDTH, height - NOTE_SIZE.HEIGHT, 0);
			ctx.fill();
			ctx.stroke();
		}

		// 흰 건반 그리기
		for (let i = 0; i < NOTES.length; i++) {
			const x = i * NOTE_SIZE.WIDTH;
			ctx.fillStyle = Theme.colors.white;
			if (activeNotes.includes(NOTES[i])) {
				ctx.fillStyle = Theme.colors.gray[200];
			}
			ctx.strokeStyle = Theme.colors.black;
			ctx.lineWidth = 0.5;
			drawRoundedRect(ctx, x, height - NOTE_SIZE.HEIGHT, NOTE_SIZE.WIDTH, NOTE_SIZE.HEIGHT, 6);
			ctx.fill();
			ctx.stroke();
		}

		// 검은 건반 그리기
		for (let i = 0; i < BLACK_NOTES.length; i++) {
			if (BLACK_NOTES[i] === '') continue;
			const x = i * NOTE_SIZE.WIDTH + NOTE_SIZE.WIDTH - NOTE_SIZE.WIDTH / 2 + i * 1;
			ctx.fillStyle = 'black';
			drawRoundedRect(ctx, x, height - NOTE_SIZE.HEIGHT, NOTE_SIZE.WIDTH - 1, NOTE_SIZE.HEIGHT / 2, 6);
			ctx.fill();
			ctx.stroke();
		}
	}, [activeNotes]);

	return { activeNotes, oct, canvasRef };
};
export default usePlayNote;
