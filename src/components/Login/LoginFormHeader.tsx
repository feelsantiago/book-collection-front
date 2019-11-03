/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:31:44
 * @modify date 2019-08-29 12:31:44
 * @desc Logo and app name for login form
 */

import React, { FunctionComponent } from 'react';

import { LoginLogo, LoginCardHeader, LoginCardSubTitle } from '../../assets/styles/components/LoginForm';
import logo from '../../assets/images/kixpay-logo.png';

const LoginFormHeader: FunctionComponent = () => {
	return (
		<LoginCardHeader>
			<LoginLogo alt="logo" src={logo} />
			<LoginCardSubTitle>Reports</LoginCardSubTitle>
		</LoginCardHeader>
	);
};

export default LoginFormHeader;
