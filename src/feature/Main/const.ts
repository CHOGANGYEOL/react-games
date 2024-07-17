import { Items } from './types';
import { BASE_URL } from '../const';

export const MAIN_DATA: Items = [
	{
		name: 'O-Mok',
		url: `${BASE_URL}images/games/o_mok_image.png`,
		path: 'o-mok',
	},
	{
		name: 'Dino Runner',
		url: `${BASE_URL}images/games/dino_image.png`,
		path: 'dino',
	},
	{
		name: 'Pixel Canvas',
		// url: `${BASE_URL}images/games/dino_image.png`,
		path: 'pixel-canvas',
	},
] as const;

export const DEFAULT_IMAGE_PATH = `${BASE_URL}images/common/no_image.svg`;

export const REACT_COLUMNS = {
	1280: 6,
	1024: 6,
	768: 4,
	640: 2,
} as const;
