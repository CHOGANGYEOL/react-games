/* eslint-disable @typescript-eslint/no-unsafe-return */
/* eslint-disable @typescript-eslint/no-unsafe-member-access */
/* eslint-disable @typescript-eslint/no-explicit-any */
/* eslint-disable @typescript-eslint/no-unsafe-assignment */
import Theme, { ColorsType, FontType } from './Theme';

export const SEPARATOR = '_';

type NestedKeys<T> = {
	[K in keyof T]: T[K] extends object ? `${Extract<K, string>}${typeof SEPARATOR}${Extract<keyof T[K], number>}` : K;
}[keyof T];

export type ColorKeys = NestedKeys<ColorsType>;

export type FontKeys = NestedKeys<FontType>;

export const getFontStyle = (key?: FontKeys): string | undefined => {
	if (!key) return undefined;
	const keys = key.split(SEPARATOR);

	let current: any = Theme.font;
	keys.forEach((k) => {
		current = current[k];
	});
	return current;
};

export const getColorStyle = (key?: ColorKeys): string | undefined => {
	if (!key) return undefined;
	const keys = key.split(SEPARATOR);
	let current: any = Theme.colors;
	keys.forEach((k) => {
		current = current[k];
	});
	return current;
};
