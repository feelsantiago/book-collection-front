import React, { FunctionComponent } from 'react';
import { Button, Icon } from 'antd';
import { QueryRemoveButtonGroup } from '../../assets/styles/components/QueryBuilder';

interface RemoveButtonGroupProps {
	onRemoveClick(): void;
}

const RemoveButtonGroup: FunctionComponent<RemoveButtonGroupProps> = ({ onRemoveClick, children, ...props }) => (
	<QueryRemoveButtonGroup {...props}>
		{children}
		<Button type="danger" ghost onClick={onRemoveClick}>
			<Icon type="close" />
		</Button>
	</QueryRemoveButtonGroup>
);

export default RemoveButtonGroup;
