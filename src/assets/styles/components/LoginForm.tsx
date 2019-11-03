/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:29:27
 * @modify date 2019-08-29 12:29:27
 * @desc Define styles for login forms
 */

import React from 'react';
import styled from 'styled-components';
import { Card, Icon, Button, Input } from 'antd';

import { BackgroundColors } from '../variables';
import { TextCenter } from '../Common/Text';

export const LoginCard = styled((props) => <Card {...props} />)`
	width: 320px;
	background: ${BackgroundColors.lightGrey} !important;
`;

export const LoginIcon = styled((props) => <Icon {...props} />)`
	color: rgba(0,0,0,.25)
`;

export const LoginSubmitButton = styled((props) => <Button {...props} />)`
	width: 100%;
	background-color: #366092 !important;
	color: white !important;
	border-radius: 0 !important;
	font-weight: 500 !important;
    min-height: 38px !important;
`;

export const LoginForgot = styled.a`float: right;`;

export const LoginLogo = styled.img`
	width: 200px;
	margin-right: 8px;
`;

export const LoginCardHeader = styled(TextCenter)`
    margin-bottom: 10px;
`;

export const LoginCardSubTitle = styled.h2`color: #366092;`;

export const LoginLabel = styled.label`
	color: #366092;
	font-weight: 400;
	line-height: 1.5;
`;

export const LoginInput = styled((props) => <Input {...props} />)`
	display: block !important;
	width: 100% !important;
	padding: .375rem .75rem !important;
	color: #495057 !important;
	background-color: #fff !important;
	background-image: none !important;
	background-clip: padding-box !important;
	border: 1px solid #ced4da !important;
	border-radius: 0 !important;

	:focus {
		border: 1px solid rgba(54,54,54,.15) !important;
		-webkit-box-shadow: 0 3px 10px 0 rgba(54,96,146,.25) !important;
		box-shadow: 0 3px 10px 0 rgba(54,96,146,.25) !important;
	}
`;
