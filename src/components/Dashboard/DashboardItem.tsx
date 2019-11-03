import React, { FunctionComponent } from 'react';
import { Card } from 'antd';
import DashboardItemDropdown from './DashboardItemDropdown';

interface DashboardItemProps {
	title: string;
	itemId: string;
}

const DashboardItem: FunctionComponent<DashboardItemProps> = ({ title, itemId, children }) => {
	return (
		<Card
			title={title}
			style={{
				height: '100%',
				width: '100%'
			}}
			extra={<DashboardItemDropdown itemId={itemId} />}>
			{children}
		</Card>
	);
};

export default DashboardItem;
