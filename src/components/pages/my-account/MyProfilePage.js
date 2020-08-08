import React from 'react';
import { connect } from 'react-redux';
import PropTypes from 'prop-types';
import { Form, Input, Button } from 'antd';
import { getUserName, getEmail } from '../../../selectors/auth';
import { startUpdateMyProfile } from '../../../actions/auth';

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

    onFinish = (values) => {
        // eslint-disable-next-line no-shadow
        const { startUpdateMyProfile } = this.props;
        startUpdateMyProfile(values);
    };

    render() {
        const { username, email } = this.props;
        return (
            <>
                <div className="login-wrapper">
                    <Form
                        {...this.layout}
                        name="basic"
                        initialValues={{
                            username,
                            email,
                        }}
                        className="user-info-wrapper"
                        onFinish={this.onFinish}
                    >
                        <Form.Item label="Username" name="username">
                            <Input />
                        </Form.Item>

                        <Form.Item label="Password" name="password">
                            <Input.Password />
                        </Form.Item>

                        <Form.Item label="Email" name="email">
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
        );
    }
}

MyProfilePage.propTypes = {
    startUpdateMyProfile: PropTypes.func,
    username: PropTypes.string,
    email: PropTypes.string,
};

const mapStateToProps = (state) => ({
    username: getUserName(state.auth.user),
    email: getEmail(state.auth.user),
});

const mapDispatchToProps = (dispatch) => ({
    startUpdateMyProfile: (values) => dispatch(startUpdateMyProfile(values)),
});

export default connect(mapStateToProps, mapDispatchToProps)(MyProfilePage);
