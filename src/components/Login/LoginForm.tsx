/**
 * @author Filipe Santiago
 * @email filipe@upplify.com
 * @create date 2019-08-29 12:31:44
 * @modify date 2019-08-29 12:31:44
 * @desc Form for user login
 */

import React, { FunctionComponent, useState } from 'react';
import { Form, Checkbox, notification, Spin } from 'antd';
import { WrappedFormUtils, FormComponentProps } from 'antd/lib/form/Form';
import useRouter from 'use-react-router';
import { History } from 'history';

import { LoginCard, LoginSubmitButton, LoginLabel, LoginInput } from '../../assets/styles/components/LoginForm';
import LoginFormHeader from './LoginFormHeader';
import authService from '../../services/auth-service';
import AuthApi from '../../api/auth.api';

interface FormModel {
	email: string;
	password: string;
	remember: boolean;
}

/**
 * Verify login information and call backend to get the auth token
 * @param form 
 * @param history 
 */
const handleSubmit = (
	form: WrappedFormUtils | undefined,
	history: History,
	setLoading: React.Dispatch<React.SetStateAction<boolean>>
) => {
	if (!form) return;

	form.validateFields(async (err, values: FormModel) => {
		if (err) return;
		setLoading(true);

		try {
			const result = await AuthApi.login({ email: values.email, password: values.password });

			authService.setAuthentication(
				result.token,
				{ email: result.email, role: result.role, name: result.name },
				values.remember
			);

			// navigate to home
			history.push('/');
		} catch (error) {
			console.log(error);
			notification.error({
				message: 'Request Error',
				description: error.response && error.response.data ? error.response.data.message : error.message
			});
		} finally {
			setLoading(false);
		}
	});
};

const LoginForm: FunctionComponent<FormComponentProps> = ({ form }) => {
	const { getFieldDecorator } = form;
	const { history } = useRouter();

	const [ loading, setLoading ] = useState(false);

	return (
		<LoginCard bordered={false}>
			<LoginFormHeader />
			<Spin tip="loading..." spinning={loading}>
				<Form
					hideRequiredMark
					onSubmit={(e) => {
						e.preventDefault();
						handleSubmit(form, history, setLoading);
					}}>
					<Form.Item label={<LoginLabel>Email Address</LoginLabel>}>
						{getFieldDecorator('email', {
							rules: [ { required: true, message: 'Enter a valid e-mail address!' } ]
						})(<LoginInput placeholder="Enter your email address" />)}
					</Form.Item>
					<Form.Item label={<LoginLabel>Password</LoginLabel>}>
						{getFieldDecorator('password', {
							rules: [
								{ required: true, message: 'The password must contain at least 3 characters!', min: 3 }
							]
						})(<LoginInput type="password" placeholder="Enter your password" />)}
					</Form.Item>
					<Form.Item>
						{getFieldDecorator('remember', {
							valuePropName: 'checked',
							initialValue: true
						})(<Checkbox>Remember me</Checkbox>)}
						<LoginSubmitButton htmlType="submit">SING IN</LoginSubmitButton>
					</Form.Item>
				</Form>
			</Spin>
		</LoginCard>
	);
};

export default Form.create({ name: 'login_form' })(LoginForm);
