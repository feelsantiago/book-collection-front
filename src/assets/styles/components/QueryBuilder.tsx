import React from 'react';
import { Row, Card, Select, Input, Button } from 'antd';
import styled from 'styled-components';
import MemberDropdown from '../../../components/QueryBuilder/MemberDropdown';
import ButtonDropdown from '../../../components/QueryBuilder/ButtonDropdown';

export const QueryRow = styled((props) => <Row {...props} />)`
	margin-bottom: 12px;
`;

export const QueryCard = styled((props) => <Card {...props} />)`
	min-height: 420px;
`;

export const MemberRow = styled.div`margin-bottom: 12px;`;

export const FilterMemberDropdown = styled(MemberDropdown)`
	width: 150;
	text-overflow: ellipsis;
	overflow: hidden;
`;

export const FilterSelect = styled((props) => <Select {...props} />)`
	width: 200px;
	margin-right: 8;
`;

export const FilterInputSelect = styled((props) => <Select {...props} />)`
	width: 300px;
`;

export const FilterInputStyle = styled((props) => <Input {...props} />)`
	width: 300px;
`;

export const QueryRemoveButtonGroup = styled((props) => <Button.Group {...props} />)`
	margin-right: 8px;
`;

export const TimeGroupMemberDropdown = styled(ButtonDropdown)`
	margin-left: 8px;
	margin-right: ${(props: { right?: boolean }) => (props.right ? '8px' : 'none')};
`;
