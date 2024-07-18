import styled from 'styled-components';

import { Button, ButtonProps } from '../../components/Button';
import { Grid, VStack } from '../../components/Common';
import { CONTROL_BUTTONS, MOVE_KEYS } from '../../feature/Snake/const';
import { useSnake } from '../../feature/Snake/hooks';

const Snake = () => {
	const { canvasRef, onChangeOrder, isGameOver, onStart, score } = useSnake();
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

			<Controller $gap="1rem" $columns={3}>
				{CONTROL_BUTTONS.map((button) => (
					<Button
						key={'control__button--' + button.key}
						{...ControlButtonProps}
						onClick={() => {
							onChangeOrder({ key: MOVE_KEYS[button.key] } as KeyboardEvent);
						}}
					>
						{button.icon}
					</Button>
				))}
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

const Controller = styled(Grid)`
	margin: 0 auto;
	max-width: calc(5.4rem * 3 + 2rem);
	button:nth-child(1) {
		grid-column: span 3;
		margin: 0 auto;
	}
`;
export default Snake;
