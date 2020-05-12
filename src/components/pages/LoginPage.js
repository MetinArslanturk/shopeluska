import React from 'react';
import { connect } from 'react-redux';
import { Redirect } from 'react-router-dom';
import { baseHref } from '../../config/config';
import { useMountEffect } from '../../helpers/mounteffect';
import { hideSidebar, showSidebar } from '../../actions/layout';
import { startLogin } from '../../actions/auth';
import { isAuthenticated } from '../../selectors/auth';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


export const LoginPage = ({ hideSidebar, showSidebar, startLogin, isAuthenticated, redirectUrl }) => {
    useMountEffect(() => {
        hideSidebar();
        return () => {
            // Give back the sidebar
            showSidebar();
        }
    })

    const onFinish = values => {
        // dummy start login
        startLogin(values);
    };


    return (
        <>
            {isAuthenticated ? (
                <Redirect to={redirectUrl ? redirectUrl : baseHref} />
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
                                    label="Email"
                                    name="email"
                                    rules={[{ required: true, message: 'Please input your email!' }]}
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
    isAuthenticated: isAuthenticated(state.auth.user),
    redirectUrl: state.auth.redirectUrl
});

const mapDispatchToProps = (dispatch) => ({
    hideSidebar: () => dispatch(hideSidebar()),
    showSidebar: () => dispatch(showSidebar()),
    startLogin: (values) => dispatch(startLogin(values))
})
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);