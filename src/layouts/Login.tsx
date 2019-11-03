/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:43:37
 * @modify date 2019-08-26 12:43:37
 * @desc Default layout for authentication pages
 */

import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import { LoginLayout } from '../assets/styles/layouts/Login';

const { Content } = Layout;

const Login: FunctionComponent = ({ children }) => {
	return (
		<LoginLayout id="app-login">
			<Layout>
				<Content>{children}</Content>
			</Layout>
		</LoginLayout>
	);
};

export default Login;
