import { Items } from './types';

export const MAIN_DATA: Items = [
	{
		name: 'O-Mok',
		url: `images/games/o_mok_image.png`,
		path: 'o-mok',
	},
	{
		name: 'Dino Runner',
		url: `images/games/dino_image.png`,
		path: 'dino',
	},
	{
		name: 'Pixel Canvas',
		url: `images/games/pixel_canvas_image.png`,
		path: 'pixel-canvas',
	},
	{
		name: 'Snake Game',
		url: `images/games/snake_image.png`,
		path: 'snake',
	},
] as const;

export const DEFAULT_IMAGE_PATH = `images/common/no_image.svg`;

export const REACT_COLUMNS = {
	1280: 6,
	1024: 6,
	768: 4,
	640: 2,
} as const;
