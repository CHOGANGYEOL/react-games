import { useCallback, useEffect } from 'react';

/**
 * 현재 접속한 브라우저가 카카오 인앱 브라우저일경우 탈출하는 함수
 */
const useKakaoExit = () => {
	const userAgent = navigator.userAgent.toLowerCase();
	const href = location.href;

	useEffect(() => {
		if (userAgent.includes('kakaotalk')) {
			openKakaoExternalBrowser();
		}
	}, []);

	const openKakaoExternalBrowser = useCallback(() => {
		location.href = 'kakaotalk://web/openExternal?url=' + encodeURIComponent(href);
		closeKakaoInAppBrowser();
	}, []);

	const closeKakaoInAppBrowser = useCallback(() => {
		setTimeout(() => {
			location.href = 'kakaotalk://web/close';
		});
	}, []);
};

export default useKakaoExit;
