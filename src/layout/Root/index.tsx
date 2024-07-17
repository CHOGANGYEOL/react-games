import React, { useMemo } from 'react';

import { Outlet, useLocation } from 'react-router-dom';
import styled from 'styled-components';

import { barStyle } from '../../assets/styles/scroll';
import useKakaoExit from '../../hooks/useKakaoExit';
import Footer from '../Footer';
import Header from '../Header';
import Nav from '../Nav';

const Root = () => {
	const { pathname } = useLocation();

	const isDetail = useMemo(() => pathname.split('/').filter((el) => el !== '').length > 0, [pathname]);

	useKakaoExit();
	return (
		<React.Fragment>
			<Nav />
			<Main>
				{isDetail && <Header />}
				<section>
					<Outlet />
				</section>
				<Footer />
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

export default Root;
