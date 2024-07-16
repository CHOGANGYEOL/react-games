import { css } from 'styled-components';

interface defaultContainerStyleProps {
	max?: string;
	min?: string;
	width?: string;
}

export default ({ max, min, width }: defaultContainerStyleProps = {}) => css`
	margin: 0 auto;
	width: ${width};
	max-width: ${max};
	min-width: ${min};
	padding: 2.4rem;
	background-color: #fff;
	border-radius: 1rem;
`;
