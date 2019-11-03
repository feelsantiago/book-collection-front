import React, { FunctionComponent } from 'react';
import { Layout } from 'antd';
import Header from '../components/Header';
import { DashboardStyle, DashboardContent } from '../assets/styles/layouts/Dashboard';

const Dashboard: FunctionComponent = ({ children }) => {
	return (
		<DashboardStyle>
			<Header />
			<DashboardContent>{children}</DashboardContent>
		</DashboardStyle>
	);
};

export default Dashboard;
