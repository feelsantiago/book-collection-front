import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import { DashboardStyle } from '../assets/styles/layouts/Dashboard';

const { Content } = Layout;

const Dashboard: FunctionComponent = ({ children }) => {
	return (
		<DashboardStyle>
			<Header />
			<Content>{children}</Content>
		</DashboardStyle>
	);
};

export default Dashboard;
