import React, { FunctionComponent } from 'react';
import { Menu, Icon } from 'antd';
import ButtonDropdown from './ButtonDropdown';

const ChartTypes = [
	{
		name: 'line',
		title: 'Line',
		icon: 'line-chart'
	},
	{
		name: 'area',
		title: 'Area',
		icon: 'area-chart'
	},
	{
		name: 'bar',
		title: 'Bar',
		icon: 'bar-chart'
	},
	{
		name: 'pie',
		title: 'Pie',
		icon: 'pie-chart'
	},
	{
		name: 'table',
		title: 'Table',
		icon: 'table'
	},
	{
		name: 'number',
		title: 'Number',
		icon: 'info-circle'
	}
];

interface SelectChartTypeProps {
	chartType: string;
	updateChartType(m: any): void;
}

const SelectChartType: FunctionComponent<SelectChartTypeProps> = ({ chartType, updateChartType }) => {
	const menu = (
		<Menu>
			{ChartTypes.map((m: any) => (
				<Menu.Item key={m.title} onClick={() => updateChartType(m.name)}>
					<Icon type={m.icon} />
					{m.title}
				</Menu.Item>
			))}
		</Menu>
	);

	const foundChartType = ChartTypes.find((t) => t.name === chartType);
	if (!foundChartType) return <div>Error</div>;

	return (
		<ButtonDropdown overlay={menu} icon={foundChartType.icon}>
			{foundChartType.title}
		</ButtonDropdown>
	);
};

export default SelectChartType;
