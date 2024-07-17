import { SVGAttributes } from 'react';

import styled from 'styled-components';
import { css } from 'styled-components';

import { IconIDTypes } from './types';
import { BASE_URL } from '../../../feature/const';
import { ColorKeys, getColorStyle } from '../../../lib/styledComponents/function';

interface StyledProps {
	$width?: string;
	$height?: string;
	$defaultColor?: ColorKeys;
	$activeColor?: ColorKeys;
	$disabledColor?: ColorKeys;
	$isActive?: boolean;
	$isDisabled?: boolean;
}

interface IconProps extends SVGAttributes<SVGElement>, StyledProps {
	iconID: IconIDTypes;
}

export const Icon = (props: IconProps) => {
	const {
		iconID,
		$width = '2.4rem',
		$height,
		$activeColor = 'primary_600',
		$defaultColor = 'black',
		$disabledColor = 'gray_500',
		$isActive = false,
		$isDisabled = false,
		...defaultSvgProps
	} = props;

	return (
		<Svg
			{...defaultSvgProps}
			{...{
				$width,
				$height,
				$activeColor,
				$defaultColor,
				$disabledColor,
				$isActive,
				$isDisabled,
			}}
		>
			<use href={`${BASE_URL}images/icons/icons.svg#${iconID}`} />
		</Svg>
	);
};

const Svg = styled.svg<StyledProps>`
	color: ${({ $defaultColor }) => $defaultColor && getColorStyle($defaultColor)};
	color: ${({ $isActive, $activeColor }) => $isActive && $activeColor && getColorStyle($activeColor)};
	color: ${({ $isDisabled, $disabledColor }) => $isDisabled && $disabledColor && getColorStyle($disabledColor)};
	width: ${({ $width }) => $width};
	${({ $height }) =>
		$height
			? css`
					height: ${$height};
				`
			: css`
					aspect-ratio: 1/1;
				`};
`;
