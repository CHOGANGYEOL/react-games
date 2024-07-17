export type Level = 1 | 2 | 3 | 4 | 5 | 6 | 7;
export type Villains = 'CACTUS' | 'BIRD';
export interface VillainType {
	image: string;
	createFrame: number;
	respawnLevel: Level;
	y: number;
}
