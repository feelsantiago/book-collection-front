import React, { FunctionComponent } from 'react';
import MemberDropdown from './MemberDropdown';
import RemoveButtonGroup from './RemoveButtonGroup';

interface MemberGroupProps {
	members: Array<any>;
	availableMembers: Array<any>;
	addMemberName: string;
	updateMethods: any;
}

const MemberGroup: FunctionComponent<MemberGroupProps> = ({
	members,
	availableMembers,
	addMemberName,
	updateMethods
}) => {
	return (
		<span>
			{members.map((m) => (
				<RemoveButtonGroup key={m.index || m.name} onRemoveClick={() => updateMethods.remove(m)}>
					<MemberDropdown
						availableMembers={availableMembers}
						onClick={(updateWith) => updateMethods.update(m, updateWith)}
					>
						{m.title}
					</MemberDropdown>
				</RemoveButtonGroup>
			))}
			<MemberDropdown
				onClick={(m) => updateMethods.add(m)}
				availableMembers={availableMembers}
				type="dashed"
				icon="plus"
			>
				{addMemberName}
			</MemberDropdown>
		</span>
	);
};

export default MemberGroup;
