import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Redirect } from 'react-router-dom';
import { Form, Input, Button } from 'antd';
import { baseHref } from '../../config/config';
import { useMountEffect } from '../../helpers/mounteffect';
import {
    hideSidebar as startHideSidebar,
    showSidebar as startShowSidebar,
} from '../../actions/layout';
import { startLogin } from '../../actions/auth';
import { isAuthenticated as checkIsAuthenticated } from '../../selectors/auth';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};

export const LoginPage = ({
    hideSidebar,
    showSidebar,
    loginAction,
    isAuthenticated,
    redirectUrl,
}) => {
    useMountEffect(() => {
        hideSidebar();
        return () => {
            // Give back the sidebar
            showSidebar();
        };
    });

    const onFinish = (values) => {
        // dummy start login
        loginAction(values);
    };

    return (
        <>
            {isAuthenticated ? (
                <Redirect to={redirectUrl || baseHref} />
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
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your email!',
                                    },
                                ]}
                            >
                                <Input />
                            </Form.Item>

                            <Form.Item
                                label="Password"
                                name="password"
                                rules={[
                                    {
                                        required: true,
                                        message: 'Please input your password!',
                                    },
                                ]}
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
};

LoginPage.propTypes = {
    hideSidebar: PropTypes.func,
    showSidebar: PropTypes.func,
    loginAction: PropTypes.func,
    isAuthenticated: PropTypes.bool,
    redirectUrl: PropTypes.string,
};

const mapStateToProps = (state) => ({
    isAuthenticated: checkIsAuthenticated(state.auth.user),
    redirectUrl: state.auth.redirectUrl,
});

const mapDispatchToProps = (dispatch) => ({
    hideSidebar: () => dispatch(startHideSidebar()),
    showSidebar: () => dispatch(startShowSidebar()),
    loginAction: (values) => dispatch(startLogin(values)),
});
export default connect(mapStateToProps, mapDispatchToProps)(LoginPage);
