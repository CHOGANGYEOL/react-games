import { css } from 'styled-components';

interface ScrollbarVisibility {
	hideHorizontal?: boolean;
	hideVertical?: boolean;
}

export const barStyle = () => css`
	&::-webkit-scrollbar {
		width: 1rem;
		height: 1rem;
	}
	&::-webkit-scrollbar-track {
		background: transparent;
	}
	&::-webkit-scrollbar-thumb {
		background: ${({ theme }) => theme.colors.gray[700]};
		border-radius: 1.2rem;
	}
`;

export const scrollStyle = (props?: ScrollbarVisibility) => css`
	overflow: auto;
	${barStyle()}
	${props?.hideHorizontal &&
	css`
		overflow-x: hidden;
	`}
	${props?.hideVertical &&
	css`
		overflow-y: hidden;
	`}
`;
