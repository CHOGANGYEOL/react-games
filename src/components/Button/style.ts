import { ButtonColorStyle } from './types';

export const buttonColorStyles: ButtonColorStyle = {
	FILLED: {
		PRIMARY: {
			color: 'white',
			backgroundColor: 'primary_600',
			disabled: {
				backgroundColor: 'gray_400',
			},
			hover: {
				backgroundColor: 'primary_500',
			},
			active: {
				backgroundColor: 'primary_700',
			},
		},
		SECONDARY: {
			color: 'primary_800',
			backgroundColor: 'primary_200',
			disabled: {
				backgroundColor: 'gray_400',
				color: 'white',
			},
			hover: {
				backgroundColor: 'primary_100',
			},
			active: {
				backgroundColor: 'primary_300',
			},
		},
		TERTIARY: {
			color: 'gray_900',
			backgroundColor: 'gray_200',
			disabled: {
				backgroundColor: 'gray_200',
				color: 'gray_600',
			},
			hover: {
				backgroundColor: 'gray_100',
			},
			active: {
				backgroundColor: 'gray_300',
			},
		},
		RED: {
			color: 'red_700',
			backgroundColor: 'red_200',
		},
	},
	LINE: {
		PRIMARY: {
			color: 'primary_700',
			backgroundColor: 'white',
			border: {
				width: '0.1rem',
				style: 'solid',
				color: 'primary_500',
			},
			disabled: {
				color: 'gray_500',
				border: {
					color: 'gray_500',
				},
			},
			hover: {
				backgroundColor: 'primary_100',
			},
			active: {
				backgroundColor: 'primary_200',
			},
		},
		SECONDARY: {
			color: 'gray_800',
			backgroundColor: 'white',
			border: {
				width: '0.1rem',
				style: 'solid',
				color: 'gray_500',
			},
			disabled: {
				color: 'gray_500',
				border: {
					color: 'gray_500',
				},
			},
			hover: {
				backgroundColor: 'gray_100',
			},
			active: {
				backgroundColor: 'gray_200',
			},
		},
		RED: {
			color: 'red_500',
			backgroundColor: 'white',
			border: {
				width: '0.1rem',
				style: 'solid',
				color: 'red_500',
			},
			disabled: {
				color: 'red_300',
				border: {
					color: 'red_300',
				},
			},
			hover: {
				backgroundColor: 'red_200',
			},
			active: {
				backgroundColor: 'red_300',
			},
		},
		TERTIARY: {
			color: 'gray_500',
			backgroundColor: 'white',
			border: {
				width: '0.1rem',
				style: 'solid',
				color: 'gray_500',
			},
		},
	},
	NONE: {
		PRIMARY: {
			backgroundColor: 'transparent',
			color: 'black',
		},
		RED: {
			backgroundColor: 'transparent',
			color: 'black',
		},
		SECONDARY: {
			backgroundColor: 'transparent',
			color: 'black',
		},
		TERTIARY: {
			backgroundColor: 'transparent',
			color: 'black',
		},
	},
} as const;
