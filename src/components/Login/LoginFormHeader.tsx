/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:31:44
 * @modify date 2019-08-29 12:31:44
 * @desc Logo and app name for login form
 */

import React, { FunctionComponent } from 'react';

import { LoginLogo, LoginCardHeader, LoginCardSubTitle } from '../../assets/styles/components/LoginForm';

const LoginFormHeader: FunctionComponent = () => {
	return (
		<LoginCardHeader>
			<LoginCardSubTitle>Reports</LoginCardSubTitle>
		</LoginCardHeader>
	);
};

export default LoginFormHeader;
