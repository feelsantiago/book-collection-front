import React, { FunctionComponent, useState } from 'react';
import { Form, Row, Col, Input, Button, Icon } from 'antd';
import { FormComponentProps } from 'antd/lib/form';
import { WrappedFormUtils } from 'antd/lib/form/Form';

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

	return (
		<Form
			className="ant-advanced-search-form"
			onSubmit={(e) => {
				e.preventDefault();
				handleSubmit(form, setLoading);
			}}>
			>
			<Row gutter={24}>
				<Col span={8}>
					<Form.Item label="Nome">{getFieldDecorator('name')(<Input />)}</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Autor">
						{getFieldDecorator('authors')(<Input placeholder="Separe por virgulas. Ex: Lacan, Foucault" />)}
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Editora">
						{getFieldDecorator('publish')(<Input placeholder="Separe por virgulas. Ex: Abril, Sanar" />)}
					</Form.Item>
				</Col>
				<Col span={8}>
					<Form.Item label="Assunto">
						{getFieldDecorator('publish')(
							<Input placeholder="Separe por virgulas. Ex: Psicanalise, Psicose" />
						)}
					</Form.Item>
				</Col>
			</Row>
			<Row>
				<Col span={24} style={{ textAlign: 'right' }}>
					<Button type="primary" htmlType="submit">
						Search
					</Button>
					<Button style={{ marginLeft: 8 }} onClick={() => handleReset(form)}>
						Clear
					</Button>
				</Col>
			</Row>
		</Form>
	);
};

export default Form.create({ name: 'search_form' })(SearchBook);
