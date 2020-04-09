import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import { shallow } from 'enzyme';



test('should render login page when non-authenticated', () => {
    const startLogin = jest.fn();

    const wrapper = shallow(<LoginPage isAuthenticated={false} startLogin={startLogin} />)
    expect(wrapper).toMatchSnapshot();

    
    wrapper.find('#loginform').prop('onFinish')({username: 'aa', password:'123'});
    expect(startLogin).toHaveBeenCalled();
});


test('should redirect when authenticated', () => {
    const prop = {
        isAuthenticated: true
    }
    const wrapper = shallow(<LoginPage {...prop} />)
    expect(wrapper).toMatchSnapshot();
});