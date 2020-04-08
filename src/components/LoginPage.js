import React from 'react';
import { connect } from 'react-redux';
import { useMountEffect } from '../helpers/mounteffect';
import { hideSidebar, showSidebar } from '../actions/layout';
import { startLogin } from '../actions/auth';
import { Form, Input, Button } from 'antd';

const layout = {
    labelCol: { span: 8 },
    wrapperCol: { span: 16 },
};
const tailLayout = {
    wrapperCol: { offset: 8, span: 16 },
};


const LoginPage = ({ hideSidebar, showSidebar, startLogin }) => {

    useMountEffect(() => {
        hideSidebar();
        return () => {
            // Give back the sidebar
            showSidebar();
          }
    })

    const onFinish = values => {
        startLogin();
    };


    return (
        <>
        <div className="login-wrapper">
            <div className="login-form">
                <Form
                    {...layout}
                    name="basic"
                    initialValues={{ remember: true }}
                    onFinish={onFinish}
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
        </>
    );
}



const mapDispatchToProps = (dispatch) => ({
    hideSidebar: () => dispatch(hideSidebar()),
    showSidebar: () => dispatch(showSidebar()),
    startLogin: () => dispatch(startLogin())
})
export default connect(undefined, mapDispatchToProps)(LoginPage);