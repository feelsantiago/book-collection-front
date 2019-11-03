import React, { FunctionComponent } from 'react';
import { QueryRenderer } from '@cubejs-client/react';
import { Spin } from 'antd';
import Chart from './Chart';
import { VizState } from '../../graphql/types';
import CubeJsService from '../../services/cube-js.service';

interface ChartRendererProps {
	vizState: VizState;
}
const renderChart = (Component: any) => ({ resultSet, error }: any) =>
	(resultSet && <Component resultSet={resultSet} />) || (error && error.toString()) || <Spin />;

const ChartRenderer: FunctionComponent<ChartRendererProps> = ({ vizState }) => {
	return (
		<QueryRenderer
			updateOnlyOnStateChange
			query={vizState.query}
			cubejsApi={CubeJsService}
			render={Chart[vizState.chartType] && renderChart(Chart[vizState.chartType])}
		/>
	);
};

export default ChartRenderer;
