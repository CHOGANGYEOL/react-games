import { Level } from './type';

// 최대 레벨
export const MAX_LEVEL: Level = 7;

// 적군 리스폰 프레임
export const VILLAIN_CREATE_FRAME = 200;

// 다음 레벨로 가기위한 프레임
export const NEXT_LEVEL_OF_FRAME: Record<Level, number> = {
	1: 2000,
	2: 4000,
	3: 5000,
	4: 6000,
	5: 8000,
	6: 10000,
	7: 20000,
} as const;

// 레벨당 스피드 배율
export const SPEED: Record<Level, number> = {
	1: 2,
	2: 4,
	3: 5,
	4: 8,
	5: 10,
	6: 20,
	7: 25,
} as const;
