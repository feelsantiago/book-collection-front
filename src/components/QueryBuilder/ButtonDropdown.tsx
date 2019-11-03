import React, { FunctionComponent } from 'react';
import { Button, Dropdown, Menu } from 'antd';

interface ButtonDropdownProps {
	overlay: JSX.Element;
	icon?: string;
}

const ButtonDropdown: FunctionComponent<ButtonDropdownProps> = ({ overlay, ...buttonProps }) => {
	return (
		<Dropdown overlay={overlay} placement="bottomLeft" trigger={[ 'click' ]}>
			<Button {...buttonProps} />
		</Dropdown>
	);
};

export default ButtonDropdown;
