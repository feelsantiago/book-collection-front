import React, { FunctionComponent } from 'react';
import { Menu, Dropdown, Modal, Button } from 'antd';
import { Link } from 'react-router-dom';
import { useMutation } from '@apollo/react-hooks';

import { DELETE_DASHBOARD_ITEM } from '../../graphql/mutations';
import { GET_DASHBOARD_ITEMS } from '../../graphql/queries';

interface DashboardItemDropdownProps {
	itemId: string;
}

const DashboardItemDropdown: FunctionComponent<DashboardItemDropdownProps> = ({ itemId, children }) => {
	const [ removeDashboardItem ] = useMutation(DELETE_DASHBOARD_ITEM, {
		refetchQueries: [
			{
				query: GET_DASHBOARD_ITEMS
			}
		]
	});

	const dashboardItemDropdownMenu = (
		<Menu>
			<Menu.Item>
				<Link to={`/explore?itemId=${itemId}`}>Edit</Link>
			</Menu.Item>
			<Menu.Item
				onClick={() =>
					Modal.confirm({
						title: 'Are you sure you want to delete this item?',
						okText: 'Yes',
						okType: 'danger',
						cancelText: 'No',

						onOk () {
							removeDashboardItem({
								variables: {
									id: itemId
								}
							});
						}
					})}>
				Delete
			</Menu.Item>
		</Menu>
	);

	return (
		<Dropdown overlay={dashboardItemDropdownMenu} placement="bottomLeft" trigger={[ 'click' ]}>
			<Button shape="circle" icon="menu" />
		</Dropdown>
	);
};

export default DashboardItemDropdown;
