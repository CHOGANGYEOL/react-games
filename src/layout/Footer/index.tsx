import { Link } from 'react-router-dom';
import styled from 'styled-components';

import { Icon } from '../../components/Common/Icon';
import { ICON_ID, IconIDTypes } from '../../components/Common/Icon/types';

interface FooterItem {
	link: string;
	icon: IconIDTypes;
	target?: React.HTMLAttributeAnchorTarget;
}

const MAIL = 'rkdduf06@icloud.com';
const GIT_URL = 'https://github.com/CHOGANGYEOL/';

const FOOTER_ITEMS: FooterItem[] = [
	{
		link: 'mailto:' + MAIL,
		icon: ICON_ID.MAIL,
	},
	{
		link: GIT_URL,
		icon: ICON_ID.GIT,
		target: '_blank',
	},
] as const;

const Footer = () => {
	return (
		<Wrapper>
			<p>© CHOGANGYEOL All rights reserved.</p>
			<ul>
				{FOOTER_ITEMS.map((item, idx) => (
					<li key={'footer__item--' + String(idx)}>
						<Link to={item.link} target={item.target}>
							<Icon iconID={item.icon} $defaultColor="white" />
						</Link>
					</li>
				))}
			</ul>
		</Wrapper>
	);
};

const Wrapper = styled.footer`
	color: ${({ theme }) => theme.colors.white};
	display: flex;
	flex-direction: column;
	gap: 1.2rem;
	> p {
		${({ theme }) => theme.font.caption[1]}
	}
	> ul {
		list-style: none;
		display: flex;
		justify-content: center;
		gap: 1.2rem;
	}
`;

export default Footer;
