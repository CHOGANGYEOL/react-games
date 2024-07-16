import styled from 'styled-components';

import defaultContainerStyle from '../../assets/styles/defaultContainerStyle';
import { VStack } from '../../components/Common';
import { useDino } from '../../feature/Dino/hooks';

const Dino = () => {
	const { canvasRef, wrapperRef } = useDino();
	return (
		<Wrapper ref={wrapperRef}>
			<canvas ref={canvasRef} />
		</Wrapper>
	);
};

const Wrapper = styled(VStack)`
	${defaultContainerStyle({ max: '102.4rem' })}
`;

export default Dino;
