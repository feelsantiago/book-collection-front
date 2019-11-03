import React, { FunctionComponent } from 'react';
import { DashboardItem } from '../../graphql/types';
import { useMutation } from '@apollo/react-hooks';
import { UPDATE_DASHBOARD_ITEM } from '../../graphql/mutations';
import { GET_DASHBOARD_ITEMS } from '../../graphql/queries';
import RGL, { WidthProvider, Layout } from 'react-grid-layout';
import 'react-grid-layout/css/styles.css';
import 'react-resizable/css/styles.css';

const ReactGridLayout = WidthProvider(RGL);

interface DashboardProps {
	items: Array<DashboardItem>;
}

const Dashboard: FunctionComponent<DashboardProps> = ({ items, children }) => {
	const [ updateDashboardItem ] = useMutation(UPDATE_DASHBOARD_ITEM, {
		refetchQueries: [
			{
				query: GET_DASHBOARD_ITEMS
			}
		]
	});

	const onLayoutChange = (newLayout: RGL.Layout[]) => {
		newLayout.forEach((l: Layout) => {
			const item = items.find((i) => i.id.toString() === l.i);
			const toUpdate = {
				x: l.x,
				y: l.y,
				w: l.w,
				h: l.h
			};

			if (item && toUpdate !== item.layout) {
				updateDashboardItem({
					variables: {
						id: item.id,
						input: {
							layout: JSON.stringify(toUpdate)
						}
					}
				});
			}
		});
	};

	return (
		<ReactGridLayout cols={12} rowHeight={50} onLayoutChange={onLayoutChange}>
			{children}
		</ReactGridLayout>
	);
};

export default Dashboard;
