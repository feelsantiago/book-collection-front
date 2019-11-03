import React, { FunctionComponent } from 'react';
import SearchBook from '../components/Search/SearchBook';
import SearchResult from '../components/Search/SearchResult';

const DashboardPage: FunctionComponent = () => {
	return (
		<div>
			<SearchBook />
			<SearchResult />
		</div>
	);
};

export default DashboardPage;
