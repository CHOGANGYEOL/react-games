import styled from 'styled-components';

import { HStack } from '../../components/Common';
import { ColorKeys, getColorStyle } from '../../lib/styledComponents/function';

const Main = () => {
	return (
		<HStack $gap="1.2rem">
			Main
			<Test $color="primary_100" />
			<Test $color="primary_200" />
			<Test $color="primary_300" />
			<Test $color="primary_400" />
			<Test $color="primary_500" />
			<Test $color="primary_600" />
			<Test $color="primary_700" />
			<Test $color="primary_800" />
			<Test $color="primary_900" />
		</HStack>
	);
};

const Test = styled.div<{ $color: ColorKeys }>`
	width: 10rem;
	aspect-ratio: 1/1;
	background-color: ${({ $color }) => getColorStyle($color)};
`;
export default Main;
