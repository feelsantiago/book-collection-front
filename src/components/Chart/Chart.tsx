import React from 'react';
import { Row, Col, Statistic, Table } from 'antd';
import { Chart, Axis, Tooltip, Geom, Coord, Legend } from 'bizcharts';

const stackedChartData = (resultSet: any) => {
	const data = resultSet
		.pivot()
		.map(({ xValues, yValuesArray }: any) =>
			yValuesArray.map(([ yValues, m ]: any) => ({
				x: resultSet.axisValuesString(xValues, ', '),
				color: resultSet.axisValuesString(yValues, ', '),
				measure: m && Number.parseFloat(m)
			}))
		)
		.reduce((a: any, b: any) => a.concat(b), []);
	return data;
};

const TypeToChartComponent = {
	line: ({ resultSet }: any) => (
		<Chart
			scale={{
				x: {
					tickCount: 8
				}
			}}
			height={400}
			data={stackedChartData(resultSet)}
			forceFit
		>
			<Axis name="x" />
			<Axis name="measure" />
			<Tooltip
				crosshairs={{
					type: 'y'
				}}
			/>
			<Geom type="line" position={`x*measure`} size={2} color="color" />
		</Chart>
	),
	bar: ({ resultSet }: any) => (
		<Chart
			scale={{
				x: {
					tickCount: 8
				}
			}}
			height={400}
			data={stackedChartData(resultSet)}
			forceFit
		>
			<Axis name="x" />
			<Axis name="measure" />
			<Tooltip />
			<Geom type="intervalStack" position={`x*measure`} color="color" />
		</Chart>
	),
	area: ({ resultSet }: any) => (
		<Chart
			scale={{
				x: {
					tickCount: 8
				}
			}}
			height={400}
			data={stackedChartData(resultSet)}
			forceFit
		>
			<Axis name="x" />
			<Axis name="measure" />
			<Tooltip
				crosshairs={{
					type: 'y'
				}}
			/>
			<Geom type="areaStack" position={`x*measure`} size={2} color="color" />
		</Chart>
	),
	pie: ({ resultSet }: any) => (
		<Chart height={400} data={resultSet.chartPivot()} forceFit>
			<Coord type="theta" radius={0.75} />
			{resultSet.seriesNames().map((s: any) => <Axis name={s.key} />)}
			<Legend position="right" />
			<Tooltip />
			{resultSet.seriesNames().map((s: any) => <Geom type="intervalStack" position={s.key} color="category" />)}
		</Chart>
	),
	table: ({ resultSet }: any) => (
		<Table
			pagination={false}
			columns={resultSet.tableColumns().map((c: any) => ({ ...c, dataIndex: c.key }))}
			dataSource={resultSet.tablePivot()}
		/>
	),
	number: ({ resultSet }: any) => (
		<Row
			type="flex"
			justify="center"
			align="middle"
			style={{
				height: '100%'
			}}
		>
			<Col>{resultSet.seriesNames().map((s: any) => <Statistic value={resultSet.totalRow()[s.key]} />)}</Col>
		</Row>
	)
};

export default TypeToChartComponent;
