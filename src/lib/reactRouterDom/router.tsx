import { createHashRouter, RouterProvider } from 'react-router-dom';

import Root from '../../layout/Root';
import Pages from '../../pages';

// import Root from '../../layout/Root';

const router = createHashRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				path: '',
				element: <Pages.Main />,
			},
			{
				path: 'o-mok',
				element: <Pages.OMok />,
			},
			{
				path: 'canvas',
				element: <Pages.Canvas />,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
