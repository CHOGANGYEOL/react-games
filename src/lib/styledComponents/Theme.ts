import { type DefaultTheme } from 'styled-components';

const colors = {
	white: '#fff',
	black: '#1e2329',
	transparent: 'transparent',
	red: {
		200: '#FFF5F5',
		300: '#FFCAC7',
		400: '#FC8E8B',
		500: '#F75B5B',
		600: '#F74444',
		700: '#E43030',
	},
	green: {
		200: '#E1FCEC',
		300: '#C1F7D7',
		400: '#7EE7AE',
		500: '#43DD8A',
		600: '#1CC880',
		700: '#13AF6E',
	},
	blue: {
		200: '#F2F9FF',
		300: '#CCDDFF',
		400: '#99B8FF',
		500: '#638DFF',
		600: '#567AFA',
		700: '#3862D6',
	},
	yellow: {
		200: '#FFF9E7',
		300: '#FFF1C8',
		400: '#FFD968',
		500: '#FFC518',
		600: '#FF9900',
		700: '#F57600',
	},
	gray: {
		100: '#F7F9FA',
		200: '#F1F3F5',
		300: '#E9ECEF',
		400: '#DDE1E6',
		500: '#CED4DA',
		600: '#ADB5BD',
		700: '#868E96',
		800: '#5E646C',
		900: '#343A40',
	},
	primary: {
		100: '#D7FAFF',
		200: '#BFF4FA',
		300: '#ABF0FA',
		400: '#95E9F5',
		500: '#7CE9F4',
		600: '#60DCF9',
		700: '#5FC7DE',
		800: '#52B1C7',
		900: '#4099AD',
	},
} as const;

const font = {
	headline: {
		1: 'font-size:3.6rem; line-height:4.8rem; letter-spacing: -.5px;',
		2: 'font-size:3.2rem; line-height:4.4rem; letter-spacing: -.5px;',
		3: 'font-size:2.8rem; line-height:4.0rem; letter-spacing: -.5px;',
		4: 'font-size:2.4rem; line-height:3.6rem; letter-spacing: -.5px;',
	},
	title: {
		1: 'font-size:2.0rem; line-height:3.2rem; letter-spacing: -.3px;',
		2: 'font-size:1.8rem; line-height:2.8rem; letter-spacing: 0px;',
		3: 'font-size:1.6rem; line-height:2.2rem; letter-spacing: -.3px;',
	},
	body: {
		1: 'font-size:1.5rem; line-height:2.2rem; letter-spacing: 0px;',
		2: 'font-size:1.4rem; line-height:2.0rem; letter-spacing: 0px;',
		3: 'font-size:1.3rem; line-height:1.8rem; letter-spacing: 0px;',
	},
	caption: {
		1: 'font-size:1.2rem; line-height:1.6rem; letter-spacing: .3px;',
		2: 'font-size:1.1rem; line-height:1.4rem; letter-spacing: .3px;',
	},
	label: {
		1: 'font-size:1.6rem; line-height:1.6rem; letter-spacing: 0px;',
		2: 'font-size:1.4rem; line-height:1.4rem; letter-spacing: 0px;',
	},
} as const;

const shadow = {
	modal: '0px 4px 16px rgba(31, 33, 42, 0.08)',
	tooltip: '0px 2px 12px 0px rgba(0, 0, 0, 0.25)',
} as const;

const breakPoint = {
	small: 'max-width: 640px',
	medium: 'max-width: 768px',
	large: 'max-width: 1024px',
	xLarge: 'max-width: 1280px',
} as const;

const Theme: DefaultTheme = {
	colors,
	font,
	breakPoint,
	shadow,
} as const;

type ColorsType = typeof colors;
type FontType = typeof font;
type BreakPointType = typeof breakPoint;
type ShadowType = typeof shadow;

export type { ColorsType, FontType, BreakPointType, ShadowType };

export default Theme;
