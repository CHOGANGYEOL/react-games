import { css } from 'styled-components';

export const CustomToastStyle = css`
	.Toastify__toast {
		&-body > div {
			${({ theme }) => theme.font.body[1]};
			font-weight: 500;
			color: ${({ theme }) => theme.colors.white};
			&:last-child::before {
				display: block;
				${({ theme }) => theme.font.title[2]};
				font-weight: 700;
			}
		}
		&-icon {
			width: max-content;
			svg {
				display: none;
			}
			&::before {
				content: '';
				display: inline-block;
				width: 4rem;
				height: 4rem;
				background-position: center center;
				background-size: cover;
			}
		}
		&-container {
			width: 40rem;
		}

		&-theme--colored {
			&.Toastify__toast {
				white-space: pre-wrap;
				&--error {
					background-color: ${({ theme }) => theme.colors.red[500]} !important;
					.Toastify__toast-icon::before {
						background-image: url('/images/common/toast-error.svg');
					}
				}
				&--success {
					background-color: ${({ theme }) => theme.colors.green[600]} !important;
					.Toastify__toast-icon::before {
						background-image: url('/images/common/toast-success.svg');
					}
				}
				&--info {
					background-color: ${({ theme }) => theme.colors.blue[600]} !important;
					.Toastify__toast-icon::before {
						background-image: url('/images/common/toast-info.svg');
					}
				}
			}
		}
		&--error > .Toastify__toast-body > div:last-child::before {
			content: 'Error';
		}
		&--success > .Toastify__toast-body > div:last-child::before {
			content: 'Success';
		}
		&--info > .Toastify__toast-body > div:last-child::before {
			content: 'Information';
		}
	}
`;
