/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:30:43
 * @modify date 2019-08-29 12:30:43
 * @desc Define footer styles
 */

import React from 'react';
import { Layout, Typography } from 'antd';
import styled from 'styled-components';

const { Footer } = Layout;
const { Paragraph } = Typography;

export const LoginFooter = styled((props) => <Footer {...props} />)`
	position: absolute;
	width: 100%;
	bottom: 0;
	text-align: center;
`;

export const FooterText = styled((props) => <Paragraph {...props} />)`
	margin: 0 !important;
	color: rgba(0,0,0,.45);
    font-size: 13px;
`;

export const DashboardFooter = styled((props) => <Footer {...props} />)`
	background: #fff;
	text-align: center;
`;
