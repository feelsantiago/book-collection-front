/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-26 12:59:55
 * @modify date 2019-08-26 12:59:55
 * @desc [description]
 */

import React, { FunctionComponent } from 'react';
import LoginForm from '../components/Login/LoginForm';
import { AuthDiv } from '../assets/styles/pages/Auth';

const Auth: FunctionComponent = () => {
	return (
		<AuthDiv id="app-auth">
			<LoginForm />
		</AuthDiv>
	);
};

export default Auth;
