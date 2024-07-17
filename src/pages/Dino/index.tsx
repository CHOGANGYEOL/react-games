import styled from 'styled-components';

import { Button } from '../../components/Button';
import { HStack, VStack } from '../../components/Common';
import { useDino } from '../../feature/Dino/hooks';

const Dino = () => {
	const { canvasRef, wrapperRef, onStart, isStart, score, isEnd } = useDino();

	return (
		<VStack ref={wrapperRef}>
			<HStack $justifyContent="space-between" $alignItems="flex-end">
				<span>score: {score.toLocaleString()}</span>
			</HStack>
			<VStack $gap="1.2rem">
				<VStack style={{ position: 'relative' }}>
					{isEnd && <GameOver $justifyContent="center" $alignItems="center" />}
					<canvas ref={canvasRef} />
				</VStack>

				<Button
					onClick={() => {
						onStart();
					}}
					disabled={isStart}
				>
					START
				</Button>
			</VStack>
		</VStack>
	);
};

const GameOver = styled(VStack)`
	position: absolute;
	inset: 0;
	&::after {
		content: '- GAME OVER -';
		${({ theme }) => theme.font.title[1]}
		font-weight: 600;
	}
`;

export default Dino;
