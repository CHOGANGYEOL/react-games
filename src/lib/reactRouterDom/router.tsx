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
			{
				path: 'snake',
				element: <Pages.Snake />,
			},
			{
				path: 'play-note',
				element: <Pages.PlayNote />,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
