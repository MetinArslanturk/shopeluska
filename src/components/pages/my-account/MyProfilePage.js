import React from 'react';
import { connect } from 'react-redux';
import { getUserName, getEmail } from '../../../selectors/auth';
import { startUpdateMyProfile } from '../../../actions/auth';
import { Form, Input, Button } from 'antd';

export class MyProfilePage extends React.Component {

    layout = {
        labelCol: {
            span: 8,
        },
        wrapperCol: {
            span: 16,
        },
    };
    tailLayout = {
        wrapperCol: {
            offset: 8,
            span: 16,
        },
    };

    onFinish = values => {
        this.props.startUpdateMyProfile(values);        
    };


    render() {
        return (
            <>
                <div className="login-wrapper">
                    <Form
                        {...this.layout}
                        name="basic"
                        initialValues={{username: this.props.username, email: this.props.email}}
                        onFinish={this.onFinish}
                    >
                        <Form.Item
                            label="Username"
                            name="username"

                        >
                            <Input />
                        </Form.Item>

                        <Form.Item
                            label="Password"
                            name="password"

                        >
                            <Input.Password />
                        </Form.Item>

                        <Form.Item
                            label="Email"
                            name="email"

                        >
                            <Input />
                        </Form.Item>

                        <Form.Item {...this.tailLayout}>
                            <Button type="primary" htmlType="submit">
                                Submit
                            </Button>
                        </Form.Item>
                    </Form>
                </div>
            </>
        )
    }
}

const mapStateToProps = (state) => ({
    username: getUserName(state.auth.user),
    email: getEmail(state.auth.user)
});

const mapDispatchToProps = (dispatch) => ({
    startUpdateMyProfile: (values) => dispatch(startUpdateMyProfile(values))
})

export default connect(mapStateToProps, mapDispatchToProps)(MyProfilePage);