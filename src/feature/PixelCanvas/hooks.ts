import { useCallback, useEffect, useRef, useState } from 'react';

import { DEFAULT_BRUSH_COLOR, DEFAULT_CANVAS_SIZE, ERASER_COLOR } from './const';
import { Status } from './types';

export const useCanvas = () => {
	const [status, setStatus] = useState<Status>('DRAWING');
	const isDrawing = useRef(false);
	const [canvas, setCanvas] = useState<string[][]>([]);
	const [color, setColor] = useState(DEFAULT_BRUSH_COLOR);

	const onChangeColor = useCallback((rgb: string) => {
		setStatus('DRAWING');
		setColor(rgb);
	}, []);

	useEffect(() => {
		drawCanvas(DEFAULT_CANVAS_SIZE);
	}, []);

	useEffect(() => {
		const onMousemove = (e: MouseEvent) => {
			const target = e.target as HTMLElement;
			if (target.className == 'pixel' || target.className == 'row') {
				return;
			} else {
				isDrawing.current = false;
			}
		};

		window.addEventListener('mousemove', onMousemove);
		return () => {
			window.removeEventListener('mousemove', onMousemove);
		};
	}, []);

	const drawCanvas = useCallback((size: number) => {
		const rows: string[][] = [];
		for (let height = 0; height < size; height++) {
			const columns = [];
			for (let width = 0; width < size; width++) {
				columns.push(ERASER_COLOR);
			}
			rows.push(columns);
		}
		setCanvas(rows);
	}, []);

	const onMouseup = useCallback(() => {
		isDrawing.current = false;
	}, []);

	const onMousedown = useCallback(
		(row: number, col: number) => {
			isDrawing.current = true;
			changeColor(row, col);
		},
		[canvas, status, color],
	);

	// Handle mouse down event
	const changeColor = useCallback(
		(row: number, col: number) => {
			if (!isDrawing.current) return;
			setCanvas((prev) => {
				const copyCanvas = [...prev];
				switch (status) {
					case 'DRAWING':
						copyCanvas[row][col] = color;
						break;
					case 'ERASING':
						copyCanvas[row][col] = ERASER_COLOR;
						break;
				}
				return copyCanvas;
			});
		},
		[canvas, status, color],
	);

	return { canvas, setStatus, changeColor, onMousedown, onMouseup, drawCanvas, color, onChangeColor };
};
