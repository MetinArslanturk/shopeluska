import React from 'react';
import { shallow } from 'enzyme';
import { MyProfilePage } from '../../components/pages/my-account/MyProfilePage';

test('should render', () => {
    const wrapper = shallow(
        <MyProfilePage username="admin" email="admin@test.com" />
    );
    expect(wrapper).toMatchSnapshot();
});

test('should call startUpdateMyProfile', () => {
    const startUpdateMyProfile = jest.fn();
    const wrapper = shallow(
        <MyProfilePage startUpdateMyProfile={startUpdateMyProfile} />
    );
    wrapper.find('.user-info-wrapper').prop('onFinish')({
        username: 'aa',
        password: '123',
        email: 'test@test.com',
    });
    expect(startUpdateMyProfile).toHaveBeenLastCalledWith(
        expect.objectContaining({
            username: 'aa',
            password: '123',
            email: 'test@test.com',
        })
    );
});
