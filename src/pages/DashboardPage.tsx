import React, { FunctionComponent } from 'react';
import { Spin, Alert, Button } from 'antd';
import { useQuery } from '@apollo/react-hooks';
import { Link } from 'react-router-dom';

import { GET_DASHBOARD_ITEMS } from '../graphql/queries';
import DashboardItem from '../components/Dashboard/DashboardItem';
import Dashboard from '../components/Dashboard';
import { DashboardItem as DashboardItemType } from '../graphql/types';
import DashboardItemService from '../services/dashboard-item.service';
import ChartRenderer from '../components/Chart/ChartRender';

const DashboardPage: FunctionComponent = () => {
	const { loading, error, data } = useQuery(GET_DASHBOARD_ITEMS);

	if (loading) {
		return <Spin />;
	}

	if (error) {
		return <Alert message="Error occurred while loading your query" description={error.toString()} type="error" />;
	}

	const dashboardItem = (item: DashboardItemType) => {
		return (
			<div key={item.id} data-grid={DashboardItemService.defaultLayout(item)}>
				<DashboardItem key={item.id} itemId={item.id} title={item.name}>
					<ChartRenderer vizState={item.vizState} />
				</DashboardItem>
			</div>
		);
	};

	return !data || data.dashboardItems.length ? (
		<Dashboard items={data && data.dashboardItems}>
			{data && data.dashboardItems.map(DashboardItemService.deserializeItem).map(dashboardItem)}
		</Dashboard>
	) : (
		<div
			style={{
				textAlign: 'center',
				padding: 12
			}}
		>
			<h2>There are no charts on this dashboard</h2>
			<Link to="/explore">
				<Button type="primary" size="large" icon="plus">
					Add chart
				</Button>
			</Link>
		</div>
	);
};

export default DashboardPage;
