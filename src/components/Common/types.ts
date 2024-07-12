import React from 'react';

import { css } from 'styled-components';

import { ColorKeys } from '../../lib/styledComponents/function';

type Direction =
	| 'column'
	| 'column-reverse'
	| 'row'
	| 'row-reverse'
	| 'inherit'
	| 'initial'
	| 'revert'
	| 'revert-layer'
	| 'unset';

type Wrap = 'nowrap' | 'wrap' | 'wrap-reverse' | 'inherit' | 'initial' | 'revert' | 'revert-layer' | 'unset';

type JustifyContent =
	| 'center'
	| 'end'
	| 'flex-end'
	| 'flex-start'
	| 'left'
	| 'normal'
	| 'right'
	| 'space-around'
	| 'space-between'
	| 'space-evenly'
	| 'start'
	| 'stretch'
	| 'inherit'
	| 'initial'
	| 'revert'
	| 'revert-layer'
	| 'unset';

type AlignItems =
	| 'baseline'
	| 'center'
	| 'end'
	| 'flex-end'
	| 'flex-start'
	| 'normal'
	| 'self-end'
	| 'self-start'
	| 'start'
	| 'stretch'
	| 'inherit'
	| 'initial'
	| 'revert'
	| 'revert-layer'
	| 'unset';

type BorderStyleType =
	| 'none'
	| 'hidden'
	| 'dotted'
	| 'dashed'
	| 'solid'
	| 'double'
	| 'groove'
	| 'ridge'
	| 'inset'
	| 'outset';

export interface BorderStyle {
	style?: BorderStyleType;
	width?: string;
	color: ColorKeys;
}
export interface ActionType {
	backgroundColor?: ColorKeys;
	color?: ColorKeys;
	border?: BorderStyle;
}
export interface StyleType {
	color: ColorKeys;
	backgroundColor: ColorKeys;
	border?: BorderStyle;
	disabled?: ActionType;
	hover?: ActionType;
	active?: ActionType;
}

type AlignSelf = AlignItems | 'auto';

export interface FlexProps {
	$gap?: string;
	$direction?: Direction;
	$wrap?: Wrap;
	$flex?: string;
	$justifyContent?: JustifyContent;
	$alignItems?: AlignItems;
	$alignSelf?: AlignSelf;
}

export interface Children {
	children: React.ReactNode;
}
export interface CSS {
	$css?: ReturnType<typeof css>;
}
