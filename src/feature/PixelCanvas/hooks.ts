import { useCallback, useEffect, useRef, useState } from 'react';

import { DEFAULT_BRUSH_COLOR, DEFAULT_CANVAS_SIZE, ERASER_COLOR } from './const';
import { Status } from './types';

export const useCanvas = () => {
	const [status, setStatus] = useState<Status>('DRAWING');
	const isDrawing = useRef(false);
	const [canvas, setCanvas] = useState<string[][]>([]);
	const [color, setColor] = useState(DEFAULT_BRUSH_COLOR);

	//color picker 누르면 지우개 false
	// color.addEventListener('click', () => {
	// 	isErasing = false;
	// 	body.classList.replace('eraser', 'painting');
	// });

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

	// //color data 가져오기
	// async function getColorData() {
	// 	const response = await fetch('../assets/data/colors.json'); //경로때문에 헤맴 ㅜ
	// 	const json = await response.json();
	// 	return json.colors;
	// }

	// getColorData()
	// 	.then((items) => {
	// 		const colors = document.querySelector('.colors');
	// 		colors.innerHTML = items
	// 			.map((item) => {
	// 				return `<li class="color_chip" style="background-color:${item.color}" data-color="${item.color}"></li>`;
	// 			})
	// 			.join(''); //join을 사용하지 않으면 배열에 ,가 들어감. ["<li>red</li>", "<li>green</li>"]
	// 		colors.addEventListener('click', (e) => {
	// 			isErasing = false; //그리기 이벤트에서 했는데 자꾸 true로 나와서 클릭에 추가!
	// 			body.classList.replace('eraser', 'painting');
	// 			const targetColor = e.target.dataset.color;
	// 			color.value = targetColor;
	// 		});
	// 	})
	// 	.catch(console.log);

	return { canvas, setStatus, changeColor, onMousedown, onMouseup, drawCanvas, color, onChangeColor };
};
