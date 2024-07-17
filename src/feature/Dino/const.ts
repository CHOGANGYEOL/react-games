import { Level, Villains, VillainType } from './type';

// 최대 레벨
export const MAX_LEVEL: Level = 7;

// 적군 정보
export const VILLAINS: Record<Villains, VillainType> = {
	BIRD: {
		image: '',
		createFrame: 400 + Math.floor(Math.random() * 100) - 50,
		respawnLevel: 3,
		y: 120,
	},
	CACTUS: {
		image: '',
		createFrame: 250 + Math.floor(Math.random() * 100) - 50,
		respawnLevel: 1,
		y: 200,
	},
} as const;

// 다음 레벨로 가기위한 프레임
export const NEXT_LEVEL_OF_FRAME: Record<Level, number> = {
	1: 2000,
	2: 4000,
	3: 6000,
	4: 8000,
	5: 10000,
	6: 12000,
	7: 14000,
} as const;

// 레벨당 스피드 배율
export const SPEED: Record<Level, number> = {
	1: 3,
	2: 4,
	3: 5,
	4: 6,
	5: 7,
	6: 8,
	7: 9,
} as const;
