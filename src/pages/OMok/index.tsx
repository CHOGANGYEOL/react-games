import styled, { css } from 'styled-components';

import { Button } from '../../components/Button';
import { HStack, VStack } from '../../components/Common';
import { MARGIN } from '../../feature/OMok/const';
import { useOMok } from '../../feature/OMok/hooks';
import { User } from '../../feature/OMok/types';

const OMok = () => {
	const { canvasRef, parentRef, onClickCanvas, winner, handleReset, count, handleWithdraw } = useOMok();
	return (
		<VStack $justifyContent="center" $gap="1.2rem">
			<HStack $justifyContent="space-between" $alignItems="end">
				<h3>OMok</h3>
				<HStack $gap="1.2rem" $justifyContent="flex-end">
					<Button
						disabled={count <= 0 || !!winner}
						onClick={() => {
							handleWithdraw();
						}}
					>
						무르기
					</Button>
					<Button
						disabled={count <= 0}
						onClick={() => {
							handleReset();
						}}
					>
						재시작
					</Button>
				</HStack>
			</HStack>

			<CanvasWrapper ref={parentRef}>
				{!!winner && (
					<WinnerScreen $alignItems="center" $justifyContent="center" $gap="1.2rem" {...{ $winner: winner }}>
						{winner} WIN
					</WinnerScreen>
				)}
				<canvas
					ref={canvasRef}
					onClick={(e) => {
						onClickCanvas(e);
					}}
				/>
			</CanvasWrapper>
		</VStack>
	);
};

const WinnerScreen = styled(VStack)<{ $winner: User }>`
	position: absolute;
	inset: 0;
	width: calc(100% + ${MARGIN / 10}rem * 2);
	${({ $winner, theme }) => {
		switch ($winner) {
			case 'BLACK':
				return css`
					background-color: rgba(255, 255, 255, 0.7);
					color: ${theme.colors.black};
					&::before {
						background-color: ${({ theme }) => theme.colors.black};
					}
				`;
			case 'WHITE':
				return css`
					background-color: rgba(0, 0, 0, 0.4);
					color: ${theme.colors.white};
					&::before {
						background-color: ${({ theme }) => theme.colors.white};
					}
				`;
		}
	}}
	${({ theme }) => theme.font.headline[3]};
	font-weight: 600;
	&::before {
		content: '';

		border-radius: 99rem;
		aspect-ratio: 1/1;
	}
`;

const CanvasWrapper = styled.div`
	position: relative;
	left: -${MARGIN / 10}rem;
`;
export default OMok;
