import React, { FunctionComponent } from 'react';
import { Menu } from 'antd';
import ButtonDropdown from './ButtonDropdown'; // Can't be a Pure Component due to Dropdown lookups overlay component type to set appropriate styles

const memberMenu = (onClick: ((m: any) => void), availableMembers: any) => {
	return (
		<Menu>
			{availableMembers.length ? (
				availableMembers.map((m: any) => (
					<Menu.Item key={m.name} onClick={() => onClick(m)}>
						{m.title}
					</Menu.Item>
				))
			) : (
				<Menu.Item disabled>No members found</Menu.Item>
			)}
		</Menu>
	);
};

interface MemberDropdownProps {
	onClick(m: any): void;
	availableMembers: Array<any>;
	type?: string;
	icon?: string;
}

const MemberDropdown: FunctionComponent<MemberDropdownProps> = ({ onClick, availableMembers, ...buttonProps }) => {
	return <ButtonDropdown overlay={memberMenu(onClick, availableMembers)} {...buttonProps} />;
};

export default MemberDropdown;
