import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import MemberDropdown from './MemberDropdown';
import RemoveButtonGroup from './RemoveButtonGroup';
import { TimeGroupMemberDropdown } from '../../assets/styles/components/QueryBuilder';

const DateRanges = [
	{
		title: 'All time',
		value: undefined
	},
	{
		value: 'Today'
	},
	{
		value: 'Yesterday'
	},
	{
		value: 'This week'
	},
	{
		value: 'This month'
	},
	{
		value: 'This quarter'
	},
	{
		value: 'This year'
	},
	{
		value: 'Last 7 days'
	},
	{
		value: 'Last 30 days'
	},
	{
		value: 'Last week'
	},
	{
		value: 'Last month'
	},
	{
		value: 'Last quarter'
	},
	{
		value: 'Last year'
	}
];

interface TimeGroupProps {
	members: Array<any>;
	availableMembers: Array<any>;
	addMemberName: string;
	updateMethods: any;
}

const TimeGroup: FunctionComponent<TimeGroupProps> = ({ members, availableMembers, addMemberName, updateMethods }) => {
	const granularityMenu = (member: any, onClick: ((m: any) => void)) => (
		<Menu>
			{member.granularities.length ? (
				member.granularities.map((m: any) => (
					<Menu.Item key={m.title} onClick={() => onClick(m)}>
						{m.title}
					</Menu.Item>
				))
			) : (
				<Menu.Item disabled>No members found</Menu.Item>
			)}
		</Menu>
	);

	const dateRangeMenu = (onClick: ((m: any) => void)) => (
		<Menu>
			{DateRanges.map((m) => (
				<Menu.Item key={m.title || m.value} onClick={() => onClick(m)}>
					{m.title || m.value}
				</Menu.Item>
			))}
		</Menu>
	);

	return (
		<span>
			{members.map((m) => [
				<RemoveButtonGroup onRemoveClick={() => updateMethods.remove(m)} key={`${m.dimension.name}-member`}>
					<MemberDropdown
						onClick={(updateWith) => updateMethods.update(m, { ...m, dimension: updateWith })}
						availableMembers={availableMembers}>
						{m.dimension.title}
					</MemberDropdown>
				</RemoveButtonGroup>,
				<b key={`${m.dimension.name}-for`}>FOR</b>,
				<TimeGroupMemberDropdown
					overlay={dateRangeMenu((dateRange) =>
						updateMethods.update(m, { ...m, dateRange: dateRange.value })
					)}
					key={`${m.dimension.name}-date-range`}>
					{m.dateRange || 'All time'}
				</TimeGroupMemberDropdown>,
				<b key={`${m.dimension.name}-by`}>BY</b>,
				<TimeGroupMemberDropdown
					right={true}
					overlay={granularityMenu(m.dimension, (granularity) =>
						updateMethods.update(m, { ...m, granularity: granularity.name })
					)}
					key={`${m.dimension.name}-granularity`}>
					{m.dimension.granularities.find((g: any) => g.name === m.granularity) &&
						m.dimension.granularities.find((g: any) => g.name === m.granularity).title}
				</TimeGroupMemberDropdown>
			])}
			{!members.length && (
				<MemberDropdown
					onClick={(member) =>
						updateMethods.add({
							dimension: member,
							granularity: 'day'
						})}
					availableMembers={availableMembers}
					type="dashed"
					icon="plus">
					{addMemberName}
				</MemberDropdown>
			)}
		</span>
	);
};

export default TimeGroup;
