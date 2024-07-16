import styled from 'styled-components';

import defaultContainerStyle from '../../assets/styles/defaultContainerStyle';
import { Button } from '../../components/Button';
import { VStack } from '../../components/Common';
import { useDino } from '../../feature/Dino/hooks';

const Dino = () => {
	const { canvasRef, wrapperRef, onStart } = useDino();
	return (
		<Wrapper ref={wrapperRef}>
			<Button
				onClick={() => {
					onStart();
				}}
			>
				START
			</Button>
			<canvas ref={canvasRef} />
		</Wrapper>
	);
};

const Wrapper = styled(VStack)`
	${defaultContainerStyle({ max: '102.4rem' })}
`;

export default Dino;
