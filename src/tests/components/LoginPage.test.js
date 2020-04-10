import React from 'react';
import { LoginPage } from '../../components/LoginPage';
import { shallow, mount } from 'enzyme';



test('should render login page when non-authenticated', () => {
    const wrapper = shallow(<LoginPage isAuthenticated={false} />)
    expect(wrapper).toMatchSnapshot();
});


test('should trigger startLogin when form trigger onFinish', () => {
    const startLogin = jest.fn();
    const wrapper = shallow(<LoginPage isAuthenticated={false} startLogin={startLogin} />)
    wrapper.find('#loginform').prop('onFinish')({ username: 'aa', password: '123' });
    expect(startLogin).toHaveBeenCalled();
});

test('should trigger useMount and hideSidebar when mount also showSidebar on unmount', () => {
    const startLogin = jest.fn();
    const hideSidebar = jest.fn();
    const showSidebar = jest.fn();
    const wrapper = mount(<LoginPage isAuthenticated={false} startLogin={startLogin} showSidebar={showSidebar} hideSidebar={hideSidebar} />)
    expect(hideSidebar).toHaveBeenCalled();

    wrapper.unmount();
    expect(showSidebar).toHaveBeenCalled();
});


test('should redirect when authenticated', () => {
    const wrapper = shallow(<LoginPage isAuthenticated={true} />)
    expect(wrapper).toMatchSnapshot();
});