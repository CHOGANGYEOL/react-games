import { css, type CSSProperties } from 'styled-components';

/**
 * 말줄임 CSS Properties
 * @param line - 몇줄 말줄임일지 기본 1줄
 * @returns
 */
export const ellipsis = (line?: number): CSSProperties => ({
	overflow: 'hidden',
	textOverflow: 'ellipsis',
	display: '-webkit-box',
	WebkitLineClamp: line ?? 1,
	WebkitBoxOrient: 'vertical',
});

/**
 * 말줄임 Styled-components CSS
 * @param line - 몇줄 말줄임일지 기본 1줄
 * @returns
 */
export const ellipsisCSS = (line?: number): ReturnType<typeof css> => css`
	overflow: hidden;
	text-overflow: ellipsis;
	display: -webkit-box;
	-webkit-line-clamp: ${line ?? 1};
	-webkit-box-orient: vertical;
`;
