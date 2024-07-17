export const ICON_ID = {
	GIT: 'git',
	MAIL: 'mail',
} as const;

export type IconIDTypes = (typeof ICON_ID)[keyof typeof ICON_ID];
