import { useCallback, useEffect, useRef, useState } from 'react';

import BirdImage from './assets/bird.png';
import CactusImage from './assets/cactus.png';
import DinoImage from './assets/dino.png';
import { Villain, Dino } from './class';
import { MAX_LEVEL, NEXT_LEVEL_OF_FRAME, SPEED, VILLAINS } from './const';
import { Level } from './type';

export const useDino = () => {
	const canvasRef = useRef<HTMLCanvasElement>(null);
	const wrapperRef = useRef<HTMLDivElement>(null);
	const ctxRef = useRef<CanvasRenderingContext2D | null>(null);
	const dinoRef = useRef<Dino | null>(null);
	const villainArr = useRef<Villain[]>([]);
	const frameRef = useRef(0);
	const animationRef = useRef(0);
	const respawnPositionRef = useRef(0);
	const [isEnd, setEnd] = useState(false);
	const levelRef = useRef<Level>(1);
	const [score, setScore] = useState(0);
	const [isStart, setStart] = useState(false);

	const canvasSizeSetting = useCallback(() => {
		if (!canvasRef.current || !wrapperRef.current) return;
		canvasRef.current.width = wrapperRef.current.offsetWidth - 48;
		canvasRef.current.height = 248;
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
	}, []);

	const initialSetting = useCallback(() => {
		const canvas = canvasRef.current;
		if (!canvas) return;
		const ctx = canvas.getContext('2d');
		if (!ctx) return;
		respawnPositionRef.current = canvas.width;
		ctxRef.current = ctx;
		const dinoImage = new Image();
		dinoImage.src = DinoImage;
		dinoImage.onload = () => {
			dinoRef.current = new Dino(ctx, dinoImage);
		};
	}, []);

	const Playing = useCallback(() => {
		const canvas = canvasRef.current;
		const ctx = ctxRef.current;
		const dino = dinoRef.current;
		if (!ctx || !dino || !canvas) return;

		animationRef.current = requestAnimationFrame(Playing);
		// 프레임 체크
		frameRef.current += 1;

		// 화면 지우기
		ctx.clearRect(0, 0, canvas.width, canvas.height);

		// 레벨 증가
		if (frameRef.current === NEXT_LEVEL_OF_FRAME[levelRef.current] && levelRef.current < MAX_LEVEL) {
			levelRef.current++;
		}

		// 스코어 증가
		setScore(frameRef.current * levelRef.current);

		// 시간초마다 빌런 생성
		if (levelRef.current >= VILLAINS.BIRD.respawnLevel && frameRef.current % VILLAINS.BIRD.createFrame === 0) {
			const birdImage = new Image();
			birdImage.src = BirdImage;
			const villain = new Villain(ctx, birdImage, respawnPositionRef.current, VILLAINS.BIRD.y);
			villainArr.current.push(villain);
		}

		if (levelRef.current >= VILLAINS.CACTUS.respawnLevel && frameRef.current % VILLAINS.CACTUS.createFrame === 0) {
			const cactusImage = new Image();
			cactusImage.src = CactusImage;
			const villain = new Villain(ctx, cactusImage, respawnPositionRef.current, VILLAINS.CACTUS.y);
			villainArr.current.push(villain);
		}

		// 빌런 움직이는 함수
		moveVillain(villainArr.current);

		if (dino.isJumping) {
			dino.jump(SPEED[levelRef.current]);
		}
		dino.draw();
	}, []);

	const moveVillain = useCallback((villainArr: Villain[]) => {
		villainArr.forEach((villain, idx, arr) => {
			const { x } = villain.getPosition();
			// x좌표가 0미만일 경우 제거
			if (x < 0) arr.splice(idx, 1);
			clashCheck(villain);
			villain.move(SPEED[levelRef.current]);
		});
	}, []);

	const clashCheck = useCallback((villain: Villain): void => {
		const dino = dinoRef.current;
		if (!dino) return;
		const villainPosition = villain.getPosition();
		const villainSize = villain.getSize();
		const dinoPosition = dino.getPosition();
		const dinoSize = dino.getSize();

		const dinoLeft = dinoPosition.x;
		const dinoRight = dinoPosition.x + dinoSize.width;
		const dinoTop = dinoPosition.y;
		const dinoBottom = dinoPosition.y + dinoSize.height;

		const villainLeft = villainPosition.x;
		const villainRight = villainPosition.x + villainSize.width;
		const villainTop = villainPosition.y;
		const villainBottom = villainPosition.y + villainSize.height;

		if (dinoLeft < villainRight && dinoRight > villainLeft && dinoTop < villainBottom && dinoBottom > villainTop) {
			cancelAnimationFrame(animationRef.current);
			setStart(false);
			setEnd(true);
		}
	}, []);

	const onStart = useCallback(() => {
		villainArr.current = [];
		levelRef.current = 1;
		frameRef.current = 0;
		setScore(0);
		cancelAnimationFrame(animationRef.current);
		animationRef.current = 0;
		setStart(true);
		setEnd(false);
		Playing();
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

	return { canvasRef, wrapperRef, isEnd, onStart, isStart, score };
};
