import React from 'react';
import styled from 'styled-components';
import { Layout, Menu as AntdMenu } from 'antd';

const { Header } = Layout;

export const HeaderStyle = styled((props) => <Header {...props} />)`
    padding: 0 32px;
`;

export const HeaderLogo = styled.div`float: left;`;

export const HeaderTitle = styled.h2`
	color: #fff;
	margin: 0;
	margin-right: 1em;
	display: inline;
	line-height: 54px;
`;

export const Menu = styled((props) => <AntdMenu {...props} />)`
    line-height: 64px
`;
