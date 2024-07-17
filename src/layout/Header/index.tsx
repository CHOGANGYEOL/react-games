import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { Button } from '../../components/Button';

const Header = () => {
	const navigate = useNavigate();
	return (
		<Wrapper>
			<Button
				$buttonType="FILLED"
				$color="WHITE"
				$height="auto"
				className="back"
				onClick={() => {
					navigate(-1);
				}}
			>
				<span className="back--line">
					<span></span>
					<span></span>
				</span>
			</Button>
		</Wrapper>
	);
};

const Wrapper = styled.header`
	width: 100%;
	max-width: 76.8rem;
	display: flex;
	justify-content: flex-start;
	.back {
		width: 4rem;
		height: 4rem;
		border: 2px solid ${({ theme }) => theme.colors.black};
		transition: 0.5s all;
		overflow: hidden;
		transform: rotate(90deg);
		&:hover .back--line {
			animation: hoverBottom 0.37s cubic-bezier(0.215, 0.61, 0.355, 1) both;
		}
		@keyframes hoverBottom {
			100% {
				transform: rotate(225deg) translate3d(-200%, -200%, 0);
			}
		}
		&--line {
			top: 31%;
			left: 35%;
			transform: rotate(225deg);
			position: absolute;
			display: inline-block;
			width: 30%;
			height: 30%;
			span {
				position: absolute;
				top: 0;
				left: 0;
				width: 100%;
				height: 100%;
				border-top: 2px solid #000;
				border-left: 2px solid #000;
				&:nth-child(2) {
					transform: translate(200%, 200%);
				}
			}
		}
	}
`;
export default Header;
