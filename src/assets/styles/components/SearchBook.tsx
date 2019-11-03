import React from 'react';
import styled from 'styled-components';
import { Button } from 'antd';

export const SearchButton = styled((props) => <Button {...props} />)`
    margin-left: 8px;
`;

export const AddButton = styled((props) => <Button {...props} />)`
    background: green !important;
    color: white !important;
`;
