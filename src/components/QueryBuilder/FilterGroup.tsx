import React, { FunctionComponent } from 'react';
import { Select } from 'antd';
import MemberDropdown from './MemberDropdown';
import RemoveButtonGroup from './RemoveButtonGroup';
import FilterInput from './FilterInput';
import { MemberRow, FilterMemberDropdown, FilterSelect } from '../../assets/styles/components/QueryBuilder';

interface FilterGroupProps {
	members: Array<any>;
	availableMembers: Array<any>;
	addMemberName: string;
	updateMethods: any;
}

const FilterGroup: FunctionComponent<FilterGroupProps> = ({
	members,
	availableMembers,
	addMemberName,
	updateMethods
}) => {
	return (
		<span>
			{members.map((m) => (
				<MemberRow key={m.index}>
					<RemoveButtonGroup onRemoveClick={() => updateMethods.remove(m)}>
						<FilterMemberDropdown
							onClick={(updateWith: any) => updateMethods.update(m, { ...m, dimension: updateWith })}
							availableMembers={availableMembers}
						>
							{m.dimension.title}
						</FilterMemberDropdown>
					</RemoveButtonGroup>
					<FilterSelect
						value={m.operator}
						onChange={(operator: any) => updateMethods.update(m, { ...m, operator })}
					>
						{m.operators.map((operator: any) => (
							<Select.Option key={operator.name} value={operator.name}>
								{operator.title}
							</Select.Option>
						))}
					</FilterSelect>
					<FilterInput member={m} key="filterInput" updateMethods={updateMethods} />
				</MemberRow>
			))}
			<MemberDropdown
				onClick={(m: any) =>
					updateMethods.add({
						dimension: m
					})}
				availableMembers={availableMembers}
				type="dashed"
				icon="plus"
			>
				{addMemberName}
			</MemberDropdown>
		</span>
	);
};

export default FilterGroup;
