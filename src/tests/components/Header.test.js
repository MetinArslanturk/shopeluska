import React from 'react';
import { Header } from '../../components/Header';
import { history, baseHref } from '../../config/config';
import { shallow } from 'enzyme';

jest.mock('../../config/config', () => (
    {
        ...(jest.requireActual('../../config/config')),
        history: { push: jest.fn() }
    }
));


test('should render header when non-authenticated', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header uid={''} startLogout={startLogout} />)
    expect(wrapper).toMatchSnapshot();
});

test('should trigger history push when non-authenticated and click login', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header uid={''} startLogout={startLogout} />)
    wrapper.find('.login-button').prop('onClick')();
    expect(history.push).toHaveBeenLastCalledWith(baseHref + 'login');
});


test('should render header when authenticated', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header uid={'123'} startLogout={startLogout} />)
    expect(wrapper).toMatchSnapshot();
});

test('should trigger startlogout when authenticated and click logout', () => {
    const startLogout = jest.fn();
    const wrapper = shallow(<Header uid={'123'} startLogout={startLogout} />)
    wrapper.find('.logout-button').prop('onClick')();

    expect(startLogout).toHaveBeenCalled();
});