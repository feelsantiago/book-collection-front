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
				<HeaderTitle>Acervo</HeaderTitle>
			</HeaderLogo>
			<Menu theme="dark" mode="horizontal" selectedKeys={[ location.pathname ]}>
				<Item key="/">
					<Link to="/">Inicio</Link>
				</Item>
				<Item key="/logout" style={{ float: 'right' }}>
					<Link
						to="/login"
						onClick={() => {
							authService.logout();
						}}>
						Sair
					</Link>
				</Item>
			</Menu>
		</HeaderStyle>
	);
};

export default Header;
