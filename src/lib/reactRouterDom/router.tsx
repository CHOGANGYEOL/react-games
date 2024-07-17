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
				path: 'pixel-canvas',
				element: <Pages.PixelCanvas />,
			},
			{
				path: 'dino',
				element: <Pages.Dino />,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
