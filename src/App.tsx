import React, { FunctionComponent } from 'react';
import { ApolloProvider } from '@apollo/react-hooks';
import RoutesModule from './routes/route-module';
import routes from './routes';
import client from './graphql/client';

const App: FunctionComponent = () => {
	return (
		<ApolloProvider client={client}>
			<RoutesModule routes={routes} />
		</ApolloProvider>
	);
};

export default App;
