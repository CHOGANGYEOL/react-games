import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import Root from '../../layout/Root';
import Pages from '../../pages';

const router = createBrowserRouter([
	{
		path: '/',
		element: <Root />,
		children: [
			{
				index: true,
				Component: Pages.Main,
			},
			{
				path: 'o-mok',
				Component: Pages.OMok,
			},
			{
				path: 'pixel-canvas',
				Component: Pages.PixelCanvas,
			},
			{
				path: 'dino',
				Component: Pages.Dino,
			},
			{
				path: 'snake',
				Component: Pages.Snake,
			},
			{
				path: 'play-note',
				Component: Pages.PlayNote,
			},
		],
	},
]);

const Router = () => {
	return <RouterProvider router={router} />;
};

export default Router;
