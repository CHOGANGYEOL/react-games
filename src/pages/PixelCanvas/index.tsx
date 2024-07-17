import { useCallback, useState } from 'react';

import { toast } from 'react-toastify';
import styled from 'styled-components';

import { Button } from '../../components/Button';
import { HStack } from '../../components/Common';
import { DEFAULT_CANVAS_SIZE, ERROR_MESSAGE, MAX_CANVAS_SIZE, MIN_CANVAS_SIZE } from '../../feature/PixelCanvas/const';
import { useCanvas } from '../../feature/PixelCanvas/hooks';

const PixelCanvas = () => {
	const [size, setSize] = useState(DEFAULT_CANVAS_SIZE);

	const { canvas, changeColor, onMousedown, onMouseup, drawCanvas, setStatus, color, onChangeColor } = useCanvas();

	const onChangeSize = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
		console.log(e.target.value === '');
		const value = e.target.value === '' ? 0 : Number(e.target.value);

		if (isNaN(value)) {
			setSize(DEFAULT_CANVAS_SIZE);
		} else if (value > MAX_CANVAS_SIZE) {
			setSize(MAX_CANVAS_SIZE);
			toast.error(ERROR_MESSAGE.MAX_SIZE);
		} else if (value < MIN_CANVAS_SIZE) {
			setSize(MIN_CANVAS_SIZE);
			toast.error(ERROR_MESSAGE.MIN_SIZE);
		} else {
			setSize(value);
		}
	}, []);
	return (
		<Wrapper>
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
				<div className="inner">
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
					<HStack>
						<Button
							$color="RED"
							onClick={() => {
								drawCanvas(Number(size));
							}}
						>
							Reset
						</Button>
						<Button
							onClick={() => {
								setStatus('ERASING');
							}}
						>
							Eraser
						</Button>
					</HStack>
				</div>
				<div className="color--container">
					<input
						type="color"
						className="color--picker"
						value={color}
						onChange={(e) => {
							onChangeColor(e.target.value);
						}}
					/>
					<ul className="color--list"></ul>
				</div>
			</div>
		</Wrapper>
	);
};

const Wrapper = styled.div`
	.canvas {
		width: 100%;
		aspect-ratio: 1/1;
		display: flex;
		.row {
			flex: 1;
			list-style: none;
			display: flex;
			flex-direction: column;
			box-sizing: border-box;
			border-top: 1px solid ${({ theme }) => theme.colors.gray[500]};
			border-left: 1px solid ${({ theme }) => theme.colors.gray[500]};
			.pixel {
				box-sizing: border-box;
				flex: 1;
				border-right: 1px solid ${({ theme }) => theme.colors.gray[500]};
				border-bottom: 1px solid ${({ theme }) => theme.colors.gray[500]};
			}
		}
		table {
			width: 100%;
			height: 100%;
			border-collapse: collapse;
			border-spacing: 0;
			td {
				border: 1px solid #ccc;
				user-select: none;
			}
		}
	}
	.operator {
		display: flex;
		justify-content: space-between;
		.inner {
			.grid__size {
				> input {
					width: 120px;
					height: 40px;
					border-radius: 5px;
					margin-left: 10px;
					box-shadow: var(--upShadow);
					&::-webkit-outer-spin-button,
					&::-webkit-inner-spin-button {
						-webkit-appearance: none;
						margin: 0;
					}
				}
			}
		}
		.color {
			&--container {
			}
			&--picker {
				width: 200px;
				height: 40px;
				border-radius: 5px;
				box-shadow: var(--shadow);
			}
			&--list {
				display: grid;
				grid-template-columns: repeat(5, 1fr);
				gap: 10px;
				justify-items: end;
				margin-top: 30px;
			}

			&--chip {
				width: 30px;
				height: 30px;
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
	}
`;

export default PixelCanvas;
