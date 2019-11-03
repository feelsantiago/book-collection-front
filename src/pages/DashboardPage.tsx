import React, { FunctionComponent } from 'react';
import SearchBook from '../components/Search/SearchBook';
import SearchResult from '../components/Search/SearchResult';
import { Padding10 } from '../assets/styles/Common/Padding';

const DashboardPage: FunctionComponent = () => {
	return (
		<div>
			<SearchBook />
			<Padding10 />
			<SearchResult />
		</div>
	);
};

export default DashboardPage;
