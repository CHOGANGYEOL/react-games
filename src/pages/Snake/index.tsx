import styled from 'styled-components';

import { Button, ButtonProps } from '../../components/Button';
import { HStack, VStack } from '../../components/Common';
import { useSnake } from '../../feature/Snake/hooks';

const Snake = () => {
	const { canvasRef, changeMoving, isGameOver, onStart, score } = useSnake();
	return (
		<VStack $gap="1.2rem">
			<CanvasWrapper $alignItems="center" $justifyContent="center">
				{isGameOver && (
					<VStack className="game__over__screen" $alignItems="center" $justifyContent="center" $gap="1.2rem">
						<VStack $alignItems="center">
							<p className="title">- GAME OVER -</p>
							<p className="score">score : {score}</p>
						</VStack>

						<Button
							onClick={() => {
								onStart();
							}}
							$color="SECONDARY"
							$fontSize="label_1"
							$padding="0 2.4rem"
						>
							START
						</Button>
					</VStack>
				)}
				<canvas ref={canvasRef} />
			</CanvasWrapper>

			<Controller $gap="1rem">
				<HStack $justifyContent="center">
					<Button
						{...ControlButtonProps}
						onClick={() => {
							changeMoving('UP');
						}}
					>
						⬆
					</Button>
				</HStack>
				<HStack $justifyContent="center" $gap="1rem">
					<Button
						{...ControlButtonProps}
						onClick={() => {
							changeMoving('LEFT');
						}}
					>
						⬅
					</Button>
					<Button
						{...ControlButtonProps}
						onClick={() => {
							changeMoving('DOWN');
						}}
					>
						⬇
					</Button>
					<Button
						{...ControlButtonProps}
						onClick={() => {
							changeMoving('RIGHT');
						}}
					>
						➡
					</Button>
				</HStack>
			</Controller>
		</VStack>
	);
};

const ControlButtonProps: ButtonProps = { $buttonType: 'LINE', $color: 'SECONDARY', $padding: '0 2rem' };

const CanvasWrapper = styled(VStack)`
	position: relative;
	.game__over__screen {
		position: absolute;
		inset: 0;
		background-color: rgba(0, 0, 0, 0.2);
		.title {
			${({ theme }) => theme.font.title[1]}
			font-weight: 600;
		}
		.score {
		}
	}
	canvas {
		width: 100%;
		border: 1px solid ${({ theme }) => theme.colors.gray[300]};
	}
`;

const Controller = styled(VStack)``;
export default Snake;
