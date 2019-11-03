import React, { FunctionComponent } from 'react';
import { Table, Divider, Tag } from 'antd';

const SearchResult: FunctionComponent = () => {
	const columns = [
		{
			title: 'Name',
			dataIndex: 'name',
			key: 'name',
			render: (text: string) => <a>{text}</a>
		},
		{
			title: 'Age',
			dataIndex: 'age',
			key: 'age'
		},
		{
			title: 'Address',
			dataIndex: 'address',
			key: 'address'
		},
		{
			title: 'Action',
			key: 'action',
			render: (text: string, record: any) => (
				<span>
					<a>Invite {record.name}</a>
					<Divider type="vertical" />
					<a>Delete</a>
				</span>
			)
		}
	];

	return <Table columns={columns} />;
};

export default SearchResult;
