// 난수 생성기
export const getRandomInt = (min: number, max: number) => {
	return Math.floor(Math.random() * (max - min)) + min;
};
