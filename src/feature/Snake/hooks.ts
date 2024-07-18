import { useCallback, useEffect, useRef, useState } from 'react';

import AppleImage from './assets/apple.png';
import { Apple, Snake } from './class';
import { NEXT_SPEED_TO_LENGTH, MOVE_KEYS, SNAKE_CANVAS_COLUMN, MAX_SPEED } from './const';
import { Move } from './type';

export const useSnake = () => {
	const canvasRef = useRef<HTMLCanvasElement | null>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const snakeRef = useRef<Snake | null>(null);
	const appleRef = useRef<Apple | null>(null);
	const countRef = useRef(0);
	const speedRef = useRef(12);
	const animationRef = useRef(0);
	const [isGameOver, setGameOver] = useState(false);
	const [score, setScore] = useState(0);

	useEffect(() => {
		initialSetting();
	}, []);

	const initialSetting = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		ctxRef.current = ctx;
		canvas.width = 400;
		canvas.height = 400;
		snakeRef.current = new Snake();
		appleRef.current = new Apple();
		loop();
	}, []);

	// game loop
	const loop = () => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;
		const snake = snakeRef.current;
		const apple = appleRef.current;
		if (!canvas || !ctx || !snake || !apple) return;
		animationRef.current = requestAnimationFrame(loop);

		// speed 조건문
		if (++countRef.current < speedRef.current) return;

		countRef.current = 0;
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// 속도에 따라 뱀을
		snake.move();

		const { x, y } = snake.getPosition();
		const maxCells = snake.getMaxCells();

		// 스피드 설정
		speedRef.current = NEXT_SPEED_TO_LENGTH[maxCells] ?? MAX_SPEED;
		// 가로 영역밖으로 나갔을 경우 반대편으로 나오기
		if (x < 0) {
			snake.setPosition({ x: canvas.width - SNAKE_CANVAS_COLUMN });
		} else if (x >= canvas.width) {
			snake.setPosition({ x: 0 });
		}

		// 세로 영역밖으로 나갔을 경우 반대편으로 나오기
		if (y < 0) {
			snake.setPosition({ y: canvas.height - SNAKE_CANVAS_COLUMN });
		} else if (y >= canvas.height) {
			snake.setPosition({ y: 0 });
		}

		// 배열에 가장 앞은 항상 머리일수 있도록
		snake.cells.unshift({ x, y });

		// 마지막 셀 제거
		if (snake.cells.length > maxCells) {
			snake.cells.pop();
		}

		// 사과 생성
		const { x: appleX, y: appleY } = apple.getPosition();
		// test용 코드
		// ctx.fillStyle = 'red';
		// ctx.fillRect(appleX, appleY, SNAKE_CANVAS_COLUMN - 1, SNAKE_CANVAS_COLUMN - 1);
		const appleImage = new Image();
		appleImage.src = AppleImage;
		ctx.drawImage(appleImage, appleX, appleY);

		// snake 생성
		ctx.fillStyle = 'green';

		snake.cells.forEach(function (cell, index) {
			// 길이를 알기위해 격자무늬를 넣어야 함으로 -1
			ctx.fillRect(cell.x, cell.y, SNAKE_CANVAS_COLUMN - 1, SNAKE_CANVAS_COLUMN - 1);

			// snake가 사과 먹었을 경우
			if (cell.x === appleX && cell.y === appleY) {
				snake.plusMaxCells();
				apple.changePosition();
			}

			// 모든 셀과의 충돌을 확인
			for (let i = index + 1; i < snake.cells.length; i++) {
				// 뱀은 신체부분과 충돌 시 게임을 리셋
				if (cell.x === snake.cells[i].x && cell.y === snake.cells[i].y) {
					setGameOver(true);
					setScore(maxCells);
					cancelAnimationFrame(animationRef.current);
				}
			}
		});
	};

	const onStart = useCallback(() => {
		const snake = snakeRef.current;
		const apple = appleRef.current;
		if (!snake || !apple) return;
		setGameOver(false);
		setScore(0);
		snake.resetSnake();
		apple.changePosition();
		loop();
	}, []);

	const keyDownEvent = useCallback((e: KeyboardEvent) => {
		switch (e.key) {
			case MOVE_KEYS.UP:
				changeMoving('UP');
				break;
			case MOVE_KEYS.DOWN:
				changeMoving('DOWN');
				break;
			case MOVE_KEYS.LEFT:
				changeMoving('LEFT');
				break;
			case MOVE_KEYS.RIGHT:
				changeMoving('RIGHT');
				break;
		}
	}, []);

	const changeMoving = useCallback((move: Move) => {
		const snake = snakeRef.current;
		if (!snake) return;
		const { dx, dy } = snake.getMoving();
		switch (move) {
			case 'UP':
				if (dy === 0) snake.setMoving({ dy: -SNAKE_CANVAS_COLUMN, dx: 0 });
				break;
			case 'DOWN':
				if (dy === 0) snake.setMoving({ dy: SNAKE_CANVAS_COLUMN, dx: 0 });
				break;
			case 'LEFT':
				if (dx === 0) snake.setMoving({ dx: -SNAKE_CANVAS_COLUMN, dy: 0 });
				break;
			case 'RIGHT':
				if (dx === 0) snake.setMoving({ dx: SNAKE_CANVAS_COLUMN, dy: 0 });
				break;
		}
	}, []);

	useEffect(() => {
		document.addEventListener('keydown', keyDownEvent);
		return () => {
			document.removeEventListener('keydown', keyDownEvent);
		};
	}, []);

	return { canvasRef, changeMoving, isGameOver, score, onStart };
};
