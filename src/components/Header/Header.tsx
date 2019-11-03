import React, { FunctionComponent } from 'react';
import useRouter from 'use-react-router';
import { Link } from 'react-router-dom';
import { Menu as AntdMenu } from 'antd';
import { HeaderStyle, HeaderLogo, HeaderTitle, Menu } from '../../assets/styles/components/Header';
import authService from '../../services/auth-service';

const { Item } = AntdMenu;

const Header: FunctionComponent = () => {
	const { location } = useRouter();

	return (
		<HeaderStyle>
			<HeaderLogo>
				<HeaderTitle>KixPay Reports</HeaderTitle>
			</HeaderLogo>
			<Menu theme="dark" mode="horizontal" selectedKeys={[ location.pathname ]}>
				<Item key="/explore">
					<Link to="/explore">Explore</Link>
				</Item>
				<Item key="/">
					<Link to="/">Dashboard</Link>
				</Item>
				<Item key="/logout" style={{ float: 'right' }}>
					<Link
						to="/login"
						onClick={() => {
							authService.logout();
						}}>
						Logout
					</Link>
				</Item>
			</Menu>
		</HeaderStyle>
	);
};

export default Header;
