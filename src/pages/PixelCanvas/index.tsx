import { useCallback, useState } from 'react';

import styled from 'styled-components';

import { Button } from '../../components/Button';
import { VStack } from '../../components/Common';
import { COLOR_LIST, DEFAULT_CANVAS_SIZE, MAX_CANVAS_SIZE, MIN_CANVAS_SIZE } from '../../feature/PixelCanvas/const';
import { useCanvas } from '../../feature/PixelCanvas/hooks';

const PixelCanvas = () => {
	const [size, setSize] = useState(DEFAULT_CANVAS_SIZE);

	const { canvas, changeColor, onMousedown, onMouseup, drawCanvas, setStatus, color, onChangeColor } = useCanvas();

	const onChangeSize = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		const value = e.target.value === '' ? 0 : Number(e.target.value);

		if (isNaN(value)) {
			setSize(DEFAULT_CANVAS_SIZE);
		} else if (value > MAX_CANVAS_SIZE) {
			setSize(MAX_CANVAS_SIZE);
		} else if (value < MIN_CANVAS_SIZE) {
			setSize(MIN_CANVAS_SIZE);
		} else {
			setSize(value);
		}
	}, []);
	return (
		<Wrapper $gap="1.6rem">
			<div className="canvas">
				{canvas.map((row, rowIdx) => (
					<ul className="row" key={'row--' + String(rowIdx)}>
						{row.map((pixel, colIdx) => (
							<li
								className="pixel"
								key={'pixel--' + String(rowIdx) + String(colIdx)}
								style={{ backgroundColor: pixel }}
								onMouseOver={() => {
									changeColor(rowIdx, colIdx);
								}}
								onMouseUp={() => {
									onMouseup();
								}}
								onMouseDown={() => {
									onMousedown(rowIdx, colIdx);
								}}
							/>
						))}
					</ul>
				))}
			</div>

			<div className="operator">
				<div className="color--container">
					<VStack $gap="0.4rem">
						<label htmlFor="color">COLOR</label>
						<input
							type="color"
							id="color"
							className="color--picker"
							value={color}
							onChange={(e) => {
								onChangeColor(e.target.value);
							}}
						/>
					</VStack>
					<ul className="color--list">
						{COLOR_LIST.map((color) => (
							<li
								key={'color--' + color}
								className="color--chip"
								style={{ backgroundColor: color }}
								onClick={() => {
									onChangeColor(color);
								}}
							/>
						))}
					</ul>
				</div>

				<VStack $gap="1.2rem" style={{ flex: 1 }}>
					<form
						onSubmit={(e) => {
							e.preventDefault();
							drawCanvas(Number(size));
						}}
						className="grid__size"
					>
						<label htmlFor="size">SIZE</label>
						<input
							type="number"
							id="size"
							value={size}
							min={MIN_CANVAS_SIZE}
							max={MAX_CANVAS_SIZE}
							onChange={onChangeSize}
							onWheel={(e) => {
								(e.target as HTMLElement).blur();
							}}
						/>
					</form>
					<VStack $gap="1.2rem">
						<Button
							onClick={() => {
								setStatus('ERASING');
							}}
						>
							Eraser
						</Button>
						<Button
							$color="RED"
							onClick={() => {
								drawCanvas(Number(size));
							}}
						>
							Reset
						</Button>
					</VStack>
				</VStack>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled(VStack)`
	ul {
		list-style: none;
	}
	label {
		color: ${({ theme }) => theme.colors.gray[600]};
		${({ theme }) => theme.font.label[2]};
	}
	.canvas {
		width: 100%;
		aspect-ratio: 1/1;
		display: flex;
		.row {
			flex: 1;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			border-top: 1px solid ${({ theme }) => theme.colors.gray[400]};
			border-left: 1px solid ${({ theme }) => theme.colors.gray[400]};
			.pixel {
				box-sizing: border-box;
				flex: 1;
				border-right: 1px solid ${({ theme }) => theme.colors.gray[400]};
				border-bottom: 1px solid ${({ theme }) => theme.colors.gray[400]};
			}
		}
	}
	.operator {
		display: flex;
		gap: 1.6rem;
	}
	@media screen and (${({ theme }) => theme.breakPoint.small}) {
		.operator {
			flex-direction: column;
		}
	}
	.grid__size {
		display: flex;
		flex-direction: column;
		gap: 0.4rem;
		padding-bottom: 1.2rem;
		border-bottom: 1px solid ${({ theme }) => theme.colors.gray[300]};
		input {
			border: 1px solid ${({ theme }) => theme.colors.gray[300]};
			box-sizing: border-box;
			padding: 1.2rem;

			border-radius: 5px;

			&::-webkit-outer-spin-button,
			&::-webkit-inner-spin-button {
				-webkit-appearance: none;
				margin: 0;
			}
		}
	}

	.color {
		&--container {
			flex: 1;
			display: flex;
			flex-direction: column;
			gap: 1rem;
			width: 100%;
			min-width: 24rem;
			max-width: 36rem;
		}
		&--picker {
			border: none;
			padding: 0;
			margin: 0;
			width: 100%;
			height: 4.8rem;
			&::-webkit-color-swatch {
				border-radius: 4px;
				border: none;
				box-shadow:
					2px 3px 2px 2px rgba(36, 34, 34, 0.53),
					inset -2px -4px 2px 0 rgba(0, 0, 0, 0.31),
					inset 3px 3px 1px 0 rgba(255, 255, 255, 0.53);
				&:active {
					box-shadow:
						3px 3px 3px 0 rgba(255, 255, 255, 0.1),
						inset 6px 4px 4px 0 rgba(0, 0, 0, 0.3);
				}
			}
		}
		&--list {
			display: grid;
			justify-items: center;
			grid-template-columns: repeat(5, 1fr);
			gap: 1rem;
			padding: 1rem;
			border: 1px solid ${({ theme }) => theme.colors.gray[300]};
			border-radius: 4px;
		}

		&--chip {
			width: 3rem;
			aspect-ratio: 1/1;
			border-radius: 50%;
			border-radius: 50%;
			box-shadow:
				2px 3px 2px 2px rgba(36, 34, 34, 0.53),
				inset -2px -4px 2px 0 rgba(0, 0, 0, 0.31),
				inset 3px 3px 1px 0 rgba(255, 255, 255, 0.53);
			&:active {
				box-shadow:
					3px 3px 3px 0 rgba(255, 255, 255, 0.1),
					inset 6px 4px 4px 0 rgba(0, 0, 0, 0.3);
			}
		}
	}
`;

export default PixelCanvas;
