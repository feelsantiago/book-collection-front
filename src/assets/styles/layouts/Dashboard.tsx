import React from 'react';
import styled from 'styled-components';
import { Layout } from 'antd';

const { Content } = Layout;

export const DashboardStyle = styled((props) => <Layout {...props} />)`
    height: 100%;
`;

export const DashboardContent = styled((props) => <Content {...props} />)`
    margin: 80px;
`;
