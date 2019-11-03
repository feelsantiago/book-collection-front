import React, { FunctionComponent } from 'react';
import { Table, Divider } from 'antd';

import authService from '../../services/auth-service';

const {  Column } = Table;

interface BookColumn {
	name: string;
	author: string;
	type: string;
	library: string;
}

const SearchResult: FunctionComponent = () => {
	const user = authService.getUser();
	const role: string = user ? user.role : '';

	const dataSource = [
		{
			key: '1',
			name: 'Livro 1',
			author: 'Autor 1',
			type: 'Pdf',
			library: 'Virtual'
		},
		{
			key: '2',
			name: 'Livro 2',
			author: 'Autor 2',
			type: 'Pdf',
			library: 'Virtual'
		}
	];

	return (
		<Table<BookColumn> dataSource={dataSource}>
			<Column<BookColumn> key="name" title="Nome" dataIndex="name"/>
			<Column<BookColumn> key="author" title="Autor" dataIndex="author"/>
			<Column<BookColumn> key="type" title="Tipo" dataIndex="type"/>
			<Column<BookColumn> key="library" title="Biblioteca" dataIndex="library"/>
			<Column key="action" title="Ações" render={(text, record) => 
				<span>
					<a>Detalhes</a>
					{role !== 'user' ? <Divider type="vertical" /> : null}
					{role !== 'user' ? <a>Deletar</a> : null}
				</span>
			}/>
		</Table>
	);
};

export default SearchResult;
