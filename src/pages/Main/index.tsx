import { useNavigate } from 'react-router-dom';
import styled, { css } from 'styled-components';

import defaultContainerStyle from '../../assets/styles/defaultContainerStyle';
import { Grid } from '../../components/Common';
import { DEFAULT_IMAGE_PATH, MAIN_DATA, REACT_COLUMNS } from '../../feature/Main/const';

const Main = () => {
	const navigate = useNavigate();

	return (
		<Wrapper $columns={6} $gap="1.2rem">
			{MAIN_DATA.map((el) => (
				<div
					key={'item--' + el.name}
					className="grid--item"
					onClick={() => {
						navigate(el.path);
					}}
				>
					<div className="grid--item--image" style={{ backgroundImage: `url(${el.url ?? DEFAULT_IMAGE_PATH})` }} />
					<span>{el.name}</span>
				</div>
			))}
		</Wrapper>
	);
};

const Wrapper = styled(Grid)`
	${defaultContainerStyle({ max: '76.8rem' })}
	${({ theme }) => css`
		@media screen and (${theme.breakPoint.xLarge}) {
			grid-template-columns: repeat(${REACT_COLUMNS[1280]}, 1fr);
		}
		@media screen and (${theme.breakPoint.large}) {
			grid-template-columns: repeat(${REACT_COLUMNS[1024]}, 1fr);
		}
		@media screen and (${theme.breakPoint.medium}) {
			grid-template-columns: repeat(${REACT_COLUMNS[768]}, 1fr);
		}
		@media screen and (${theme.breakPoint.small}) {
			grid-template-columns: repeat(${REACT_COLUMNS[640]}, 1fr);
		}
	`}
	.grid--item {
		cursor: pointer;
		&--image {
			border-radius: 4px;
			background-color: ${({ theme }) => theme.colors.gray[600]};
			aspect-ratio: 1/1;
			background-position: center center;
			background-size: cover;
			background-repeat: no-repeat;
		}
		> span {
			${({ theme }) => theme.font.title[3]}
		}
	}
`;

export default Main;
