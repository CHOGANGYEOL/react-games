import { MouseEvent, useCallback, useEffect, useMemo, useRef, useState } from 'react';

import { BOARD_COLOR, CHECK_DIRECTION, MARGIN, RECT_COLOR, ROW, STONE_SIZE, STROKE_COLOR } from './const';
import { indexToXy, xyToIndex } from './function';
import { User } from './types';

export const useOMok = () => {
	const initialBoard = useMemo(() => new Array<number>(Math.pow(ROW + 1, 2)).fill(-1), []); // 144개의 배열을 생성해서 -1로 채움

	const canvasRef = useRef<HTMLCanvasElement>(null);

	const rowSize = useMemo(() => 600 / ROW, []);
	const [count, setCount] = useState(0);
	const [board, setBoard] = useState<number[]>(initialBoard);
	const [history, setHistory] = useState<number[][]>([]);
	const [winner, setWinner] = useState<User>(null);

	/**
	 * 바둑판 reset
	 */
	const handleReset = useCallback(() => {
		setCount(0);
		setBoard(initialBoard);
		setHistory([]);
		setWinner(null);
		onDraw();
	}, []);

	/**
	 * 바둑판 그리기 함수
	 * @param canvas
	 * @returns
	 */
	const onDraw = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = canvas?.getContext('2d');
		if (!canvas || !ctx) return;

		ctx.fillStyle = BOARD_COLOR;
		ctx.fillRect(0, 0, canvas.width, canvas.height);

		for (let x = 0; x < ROW; x++) {
			for (let y = 0; y < ROW; y++) {
				const w = (canvas.width - MARGIN * 2) / ROW;
				ctx.strokeStyle = STROKE_COLOR;
				ctx.lineWidth = 1;
				ctx.strokeRect(w * x + MARGIN, w * y + MARGIN, w, w);
			}
		}

		for (let a = 0; a < 3; a++) {
			for (let b = 0; b < 3; b++) {
				ctx.fillStyle = STROKE_COLOR;
				ctx.lineWidth = 1;
				ctx.beginPath();
				ctx.arc(
					(3 + a) * rowSize + MARGIN + a * 5 * rowSize,
					(3 + b) * rowSize + MARGIN + b * 5 * rowSize,
					STONE_SIZE / 3,
					0,
					Math.PI * 2,
				);
				ctx.fill();
			}
		}
	}, []);

	/**
	 * 방금 둔 바둑돌에 사각형 표시
	 * @param x
	 * @param y
	 */
	const onDrawRect = useCallback((x: number, y: number) => {
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;
		const w = rowSize / 2;
		ctx.strokeStyle = RECT_COLOR;
		ctx.lineWidth = 3;
		ctx.strokeRect(x * rowSize + MARGIN - w, y * rowSize + MARGIN - w, w + rowSize / 2, w + rowSize / 2);
	}, []);

	/**
	 * 바둑판의 돌을 생성
	 * @param board - 그려질 board값
	 */
	const onDrawStone = useCallback((board: number[]) => {
		const ctx = canvasRef.current?.getContext('2d');
		if (!ctx) return;

		// 모든 눈금의 돌의 유무, 색깔 알아내어 돌을 생성
		board.forEach((value, idx) => {
			if (value !== -1) {
				const [a, b] = indexToXy(idx, board);
				ctx.fillStyle = value === 1 ? 'black' : 'white';
				ctx.beginPath();
				ctx.arc(a * rowSize + MARGIN, b * rowSize + MARGIN, STONE_SIZE, 0, Math.PI * 2);
				ctx.fill();
			}
		});
	}, []);

	/**
	 * 승자가 누구인지 알아내는 함수
	 * @param x - x축
	 * @param y - y축
	 * @param board - 비교할 board
	 */
	const winnerChecker = useCallback((x: number, y: number, board: number[]) => {
		const thisColor = board[xyToIndex(x, y)];
		if (thisColor === -1) return;

		const directions = CHECK_DIRECTION.slice(0, 4);

		for (const [dx, dy] of directions) {
			let count = 1;
			for (let dir = -1; dir <= 1; dir += 2) {
				for (let step = 1; step < 5; step++) {
					const nx = x + dx * step * dir;
					const ny = y + dy * step * dir;
					if (board[xyToIndex(nx, ny)] === thisColor) {
						count++;
					} else {
						break;
					}
				}
			}
			if (count >= 5) {
				setWinner(thisColor === 1 ? 'BLACK' : 'WHITE');
			}
		}
	}, []);

	/**
	 * canvas click function
	 * @param e - MouseEvent
	 */
	const onClickCanvas = useCallback(
		(e: MouseEvent<HTMLCanvasElement>) => {
			if (!canvasRef.current) return;
			const rect = canvasRef.current.getBoundingClientRect();
			const offsetX = e.clientX - rect.left;
			const offsetY = e.clientY - rect.top;
			const x = Math.round(Math.abs(offsetX - MARGIN) / rowSize);
			const y = Math.round(Math.abs(offsetY - MARGIN) / rowSize);
			if (offsetX > 10 && offsetX < 640 && offsetY > 10 && offsetY < 640) {
				if (board[xyToIndex(x, y)] != -1) {
					return;
				} else {
					const newBoard = board.slice();
					if (count % 2 == 0) {
						newBoard[xyToIndex(x, y)] = 1;
					} else {
						newBoard[xyToIndex(x, y)] = 2;
					}
					setBoard(newBoard);
					setCount((prev) => prev + 1);

					onDraw();
					onDrawRect(x, y);
					onDrawStone(newBoard);

					winnerChecker(x, y, newBoard); // 돌이 5개 연속 놓였는지 확인
					const boardCopy = Object.assign([], newBoard);
					setHistory((prev) => [...prev, boardCopy]);
				}
			}
		},
		[board, count],
	);

	/**
	 * 무르기 호출 함수
	 */
	const handleWithdraw = useCallback(() => {
		const newHistory = history.slice();
		newHistory.pop();
		const lastBoard = newHistory.slice(-1)[0];
		setBoard(lastBoard);
		setHistory(newHistory);
		setCount((prev) => prev - 1);

		onDraw();
		onDrawStone(lastBoard);
	}, [history]);

	// first render canvas draw
	useEffect(() => {
		onDraw();
	}, []);

	return {
		canvasRef,
		winner,
		onClickCanvas,
		handleReset,
		count,
		handleWithdraw,
	};
};
