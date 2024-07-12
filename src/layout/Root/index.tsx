import React from 'react';

import { Outlet } from 'react-router-dom';

import Nav from '../Nav';

const Root = () => {
	return (
		<React.Fragment>
			<Nav />
			<main>
				<Outlet />
			</main>
		</React.Fragment>
	);
};

export default Root;
