import styled from 'styled-components';

import { HStack, VStack } from '../../components/Common';
import { KEYS } from '../../feature/PlayNote/const';
import usePlayNote from '../../feature/PlayNote/hooks/usePlayNote';

const PlayNote = () => {
	const { oct, canvasRef } = usePlayNote();
	return (
		<Wrapper $gap="2rem" $alignItems="center">
			{/* {activeNotes} */}
			<VStack className="inner" $gap={'1rem'} $alignItems="flex-end">
				<HStack>
					<span className="oct">Oct : {oct}</span>
				</HStack>
				<canvas ref={canvasRef} />
				{/* <HStack className="games">
					{KEYS.map((key) => (
						<Line
							key={'note--' + key}
							$isActive={activeNotes.includes(KEY_TO_NOTE[key])}
							onMouseDown={() => {
								handleDirectNote('ADD', key);
							}}
							onMouseUp={() => {
								handleDirectNote('DELETE', key);
							}}
							onTouchStart={() => {
								handleDirectNote('ADD', key);
							}}
							onTouchEnd={() => {
								handleDirectNote('DELETE', key);
							}}
						>
							<div className="line" />
							<div className="note" />
						</Line>
					))}
				</HStack> */}
			</VStack>
			<p className="keys">Keys : {KEYS.map((el) => el.replace('Key', '')).join(', ')}</p>
		</Wrapper>
	);
};

const Wrapper = styled(VStack)`
	.inner {
		width: 100%;
		max-width: 28rem;
		.oct {
			/* color: ${({ theme }) => theme.colors.gray[600]}; */
			${({ theme }) => theme.font.label[2]}
		}
	}
	canvas {
		width: 100%;
	}
	.games {
		width: 100%;
		height: 100vh;
		max-height: 48rem;
		list-style: none;
		display: flex;
		border-top: 1px solid ${({ theme }) => theme.colors.gray[600]};
		border-left: 1px solid ${({ theme }) => theme.colors.gray[600]};
	}
	.keys {
		width: 100%;
		border-top: 1px solid ${({ theme }) => theme.colors.gray[300]};
		padding-top: 1rem;
		color: ${({ theme }) => theme.colors.gray[600]};
		${({ theme }) => theme.font.label[2]}
	}
`;

// const Line = styled.li<{ $isActive: boolean }>`
// 	flex: 1;
// 	max-width: 4rem;
// 	display: flex;
// 	flex-direction: column;
// 	border-bottom: 1px solid ${({ theme }) => theme.colors.gray[600]};
// 	border-right: 1px solid ${({ theme }) => theme.colors.gray[600]};
// 	.line {
// 		flex: 1;
// 		background-color: ${({ theme, $isActive }) => theme.colors.gray[$isActive ? 200 : 400]};
// 	}
// 	.note {
// 		position: relative;
// 		background-color: ${({ theme, $isActive }) => ($isActive ? theme.colors.gray[300] : theme.colors.white)};
// 		border-top: 1px solid ${({ theme }) => theme.colors.gray[600]};
// 		height: 10rem;
// 	}
// 	&:not(:nth-child(3), :nth-child(7)) {
// 		.note::after {
// 			content: '';
// 			position: absolute;
// 			height: 60%;
// 			width: 100%;
// 			background-color: ${({ theme }) => theme.colors.black};
// 			transform: translateX(50%);
// 			z-index: 1;
// 			border-radius: 0 0 6px 6px;
// 			pointer-events: none;
// 		}
// 	}
// `;

export default PlayNote;
