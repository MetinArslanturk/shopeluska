import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { baseHref } from '../config/config';
import { useMountEffect } from '../helpers/mounteffect';
import { hideSidebar, showSidebar } from '../actions/layout';
import { startLogin } from '../actions/auth';
import { showErrorNotification } from './Notification';
import { isAuthenticated } from '../selectors/auth';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export const LoginPage = ({ hideSidebar, showSidebar, startLogin, isAuthenticated, redirectPath }) => {
    useMountEffect(() => {
        hideSidebar();
        return () => {
            // Give back the sidebar
            showSidebar();
        }
    })

    const onFinish = values => {
        // dummy start login
    //    showErrorNotification('Error', 'Given username or password is incorrect!', 0);
        startLogin();
    };


    return (
        <>
            {isAuthenticated ? (
                <Redirect to={redirectPath ? redirectPath : baseHref} />
            ) : (
                    <div className="login-wrapper">
                        <div className="login-form">
                            <Form
                                {...layout}
                                name="basic"
                                initialValues={{ remember: true }}
                                onFinish={onFinish}
                                id="loginform"
                            >
                                <Form.Item
                                    label="Username"
                                    name="username"
                                    rules={[{ required: true, message: 'Please input your username!' }]}
                                >
                                    <Input />
                                </Form.Item>

                                <Form.Item
                                    label="Password"
                                    name="password"
                                    rules={[{ required: true, message: 'Please input your password!' }]}
                                >
                                    <Input.Password />
                                </Form.Item>


                                <Form.Item {...tailLayout}>
                                    <Button type="primary" htmlType="submit">
                                        Submit
                        </Button>
                                </Form.Item>
                            </Form>
                        </div>
                    </div>
                )}

        </>
    );
}

const mapStateToProps = (state) => ({
    isAuthenticated: isAuthenticated(state.auth.user)
});

const mapDispatchToProps = (dispatch) => ({
    hideSidebar: () => dispatch(hideSidebar()),
    showSidebar: () => dispatch(showSidebar()),
    startLogin: () => dispatch(startLogin())
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);