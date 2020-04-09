import React from 'react';
import {LoginPage} from '../../components/LoginPage';
import { shallow } from 'enzyme';

let wrapper;

beforeEach(() => {
    const prop = {
        isAuthenticated: false
    }
    wrapper = shallow(<LoginPage {...prop} />)
});

test('should render login page when non-authenticated', () => {
    expect(wrapper).toMatchSnapshot();
});