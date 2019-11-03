import React, { FunctionComponent } from 'react';
import { FilterInputSelect, FilterInputStyle } from '../../assets/styles/components/QueryBuilder';

const FilterInputs = {
	string: ({ values, onChange }: any) => (
		<FilterInputSelect
			key="input"
			style={{
				width: 300
			}}
			mode="tags"
			onChange={onChange}
			value={values}
		/>
	),
	number: ({ values, onChange }: any) => (
		<FilterInputStyle
			key="input"
			style={{
				width: 300
			}}
			onChange={(e: any) => onChange([ e.target.value ])}
			value={(values && values[0]) || ''}
		/>
	)
};

interface FilterInputProps {
	member: any;
	updateMethods: any;
}

const FilterInput: FunctionComponent<FilterInputProps> = ({ member, updateMethods }) => {
	const Filter = (FilterInputs as any)[member.dimension.type] || FilterInputs.string;
	return (
		<Filter
			key="filter"
			values={member.values}
			onChange={(values: any) => updateMethods.update(member, { ...member, values })}
		/>
	);
};

export default FilterInput;
