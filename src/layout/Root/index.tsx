import React from 'react';

import { Outlet } from 'react-router-dom';
import styled from 'styled-components';

import { barStyle } from '../../assets/styles/scroll';
import Nav from '../Nav';

const Root = () => {
	return (
		<React.Fragment>
			<Nav />
			<Main>
				<Outlet />
			</Main>
		</React.Fragment>
	);
};

const Main = styled.main`
	background-color: ${({ theme }) => theme.colors.black};
	height: 100vh;
	padding: 3.2rem 2.4rem;
	overflow-y: scroll;
	${barStyle()}
`;

export default Root;
