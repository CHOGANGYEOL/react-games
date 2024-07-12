import 'styled-components';
import { type ShadowType, type BreakPointType, type ColorsType, type FontType } from './Theme';

declare module 'styled-components' {
	export interface DefaultTheme {
		colors: ColorsType;
		font: FontType;
		breakPoint: BreakPointType;
		shadow: ShadowType;
	}
}
