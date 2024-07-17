import React, { useMemo } from 'react';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';
import styled from 'styled-components';

import { barStyle } from '../../assets/styles/scroll';
import { Button } from '../../components/Button';
import Nav from '../Nav';

const Root = () => {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	const isDetail = useMemo(() => pathname.split('/').filter((el) => el !== '').length > 0, [pathname]);

	return (
		<React.Fragment>
			<Nav />
			<Main>
				{isDetail && (
					<Header>
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
					</Header>
				)}
				<section>
					<Outlet />
				</section>
			</Main>
		</React.Fragment>
	);
};

const Main = styled.main`
	display: flex;
	flex-direction: column;
	align-items: center;
	gap: 1.2rem;
	background-color: ${({ theme }) => theme.colors.black};
	height: 100vh;
	padding: 3.2rem 2.4rem;
	overflow-y: scroll;
	${barStyle()}
	> section {
		padding: 2.4rem;
		background-color: #fff;
		border-radius: 1rem;
		width: 100%;
		max-width: 76.8rem;
	}
`;

const Header = styled.header`
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

export default Root;
