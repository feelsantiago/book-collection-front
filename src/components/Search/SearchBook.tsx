import React, { FunctionComponent, useState } from 'react';
import { Form, Row, Col, Input, Button, Select } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { WrappedFormUtils } from 'antd/lib/form/Form';

import authService from '../../services/auth-service';
import { SearchButton, AddButton } from '../../assets/styles/components/SearchBook';

const { Option } = Select;

const handleSubmit = (
	form: WrappedFormUtils | undefined,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
	if (!form) return;

	form.validateFields((err, values) => {
		console.log('Received values of form: ', values);
	});
};

const handleReset = (form: WrappedFormUtils | undefined) => {
	if (!form) return;
	form.resetFields();
};

const SearchBook: FunctionComponent<FormComponentProps> = ({ form }) => {
	const { getFieldDecorator } = form;
	const [ loading, setLoading ] = useState(false);

	const user = authService.getUser();
	const role: string = user ? user.role : '';

	return (
		<Form
			className="ant-advanced-search-form"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(form, setLoading);
			}}>
			<Row gutter={24}>
				<Col md={8} sm={24}>
					<Form.Item label="Nome">{getFieldDecorator('name')(<Input />)}</Form.Item>
				</Col>
				<Col md={8} sm={24}>
					<Form.Item label="Autor">
						{getFieldDecorator('authors')(<Input placeholder="Separe por virgulas. Ex: Lacan, Foucault" />)}
					</Form.Item>
				</Col>
				<Col md={8} sm={24}>
					<Form.Item label="Editora">
						{getFieldDecorator('publish')(<Input placeholder="Separe por virgulas. Ex: Abril, Sanar" />)}
					</Form.Item>
				</Col>
				<Col md={8} sm={24}>
					<Form.Item label="Assunto">
						{getFieldDecorator('publish')(
							<Input placeholder="Separe por virgulas. Ex: Psicanálise, Psicose" />
						)}
					</Form.Item>
				</Col>
				<Col md={8} sm={24}>
					<Form.Item label="Tipo">
						{getFieldDecorator('type', { initialValue: 'fisico' })(
							<Select defaultValue="digital">
								<Option value="fisico">Fisico</Option>
								<Option value="digital">Digital</Option>
							</Select>
						)}
					</Form.Item>
				</Col>
				<Col md={8} sm={24}>
					<Form.Item label="Biblioteca">
						{getFieldDecorator('library', { initialValue: 'virtual' })(
							<Select>
								<Option value="virtual">Virtual</Option>
								<Option value="glacy">Glacy</Option>
								<Option value="helvia">Hélvia</Option>
							</Select>
						)}
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col md={24} style={{ textAlign: 'right' }}>
					{role !== 'user' ? <Button type="link">Novo Livro</Button> : null}
					<SearchButton type="primary" htmlType="submit">
						Search
					</SearchButton>
					<SearchButton onClick={() => handleReset(form)}>Clear</SearchButton>
				</Col>
			</Row>
		</Form>
	);
};

export default Form.create({ name: 'search_form' })(SearchBook);
