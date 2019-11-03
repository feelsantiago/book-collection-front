import React, { FunctionComponent } from 'react';
import RoutesModule from './routes/route-module';
import routes from './routes';

const App: FunctionComponent = () => {
	return <RoutesModule routes={routes} />;
};

export default App;
