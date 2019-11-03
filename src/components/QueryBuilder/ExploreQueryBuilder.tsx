import React, { FunctionComponent } from 'react';
import { Row, Col, Divider, Card } from 'antd';
import { QueryBuilder } from '@cubejs-client/react';
import ChartRender from '../Chart/ChartRender';
import MemberGroup from './MemberGroup';
import FilterGroup from './FilterGroup';
import TimeGroup from './TimeGroup';
import SelectChartType from './SelectChartType';
import CubeJsService from '../../services/cube-js.service';
import { VizState } from '../../graphql/types';
import { TextCenter } from '../../assets/styles/Common/Text';
import { QueryRow, QueryCard } from '../../assets/styles/components/QueryBuilder';

interface ExploreQueryBuilderProps {
	vizState: VizState;
	setVizState: any;
	chartExtra: any;
}

const ExploreQueryBuilder: FunctionComponent<ExploreQueryBuilderProps> = ({ vizState, setVizState, chartExtra }) => {
	return (
		<QueryBuilder
			vizState={vizState}
			setVizState={setVizState}
			cubejsApi={CubeJsService}
			render={({
				validatedQuery,
				isQueryPresent,
				chartType,
				updateChartType,
				measures,
				availableMeasures,
				updateMeasures,
				dimensions,
				availableDimensions,
				updateDimensions,
				segments,
				availableSegments,
				updateSegments,
				filters,
				updateFilters,
				timeDimensions,
				availableTimeDimensions,
				updateTimeDimensions
			}: any) => [
				<Row
					type="flex"
					justify="space-around"
					align="top"
					gutter={24}
					style={{
						marginBottom: 12
					}}
					key="1">
					<Col span={24}>
						<Card>
							<QueryRow type="flex" justify="space-around" align="top" gutter={24}>
								<Col span={24}>
									<MemberGroup
										members={measures}
										availableMembers={availableMeasures}
										addMemberName="Measure"
										updateMethods={updateMeasures}
									/>
									<Divider type="vertical" />
									<MemberGroup
										members={dimensions}
										availableMembers={availableDimensions}
										addMemberName="Dimension"
										updateMethods={updateDimensions}
									/>
									<Divider type="vertical" />
									<MemberGroup
										members={segments}
										availableMembers={availableSegments}
										addMemberName="Segment"
										updateMethods={updateSegments}
									/>
									<Divider type="vertical" />
									<TimeGroup
										members={timeDimensions}
										availableMembers={availableTimeDimensions}
										addMemberName="Time"
										updateMethods={updateTimeDimensions}
									/>
								</Col>
							</QueryRow>
							<QueryRow type="flex" justify="space-around" align="top" gutter={24}>
								<Col span={24}>
									<FilterGroup
										members={filters}
										availableMembers={availableDimensions.concat(availableMeasures)}
										addMemberName="Filter"
										updateMethods={updateFilters}
									/>
								</Col>
							</QueryRow>
							<Row type="flex" justify="space-around" align="top" gutter={24}>
								<Col span={24}>
									<SelectChartType chartType={chartType} updateChartType={updateChartType} />
								</Col>
							</Row>
						</Card>
					</Col>
				</Row>,
				<Row type="flex" justify="space-around" align="top" gutter={24} key="2">
					<Col span={24}>
						{isQueryPresent ? (
							<QueryCard extra={chartExtra}>
								<ChartRender
									vizState={{
										query: validatedQuery,
										chartType
									}}
								/>
							</QueryCard>
						) : (
							<TextCenter>
								<h2>Choose a measure or dimension to get started</h2>
							</TextCenter>
						)}
					</Col>
				</Row>
			]}
		/>
	);
};

export default ExploreQueryBuilder;
