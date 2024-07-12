import { StyleType } from '../Common/types';

type ButtonType = 'FILLED' | 'LINE' | 'NONE';
type ButtonColorType = 'PRIMARY' | 'SECONDARY' | 'TERTIARY' | 'RED';
type ButtonCornerType = 'ROUNDED' | 'RECTANGULAR';

type ButtonColorStyle = Record<ButtonType, Record<ButtonColorType, StyleType>>;

export type { ButtonType, ButtonColorType, ButtonCornerType, ButtonColorStyle };
