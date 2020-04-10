import React from 'react';
import Footer from '../../components/Footer';
import { shallow } from 'enzyme';

test('should render Footer', () => {
    const wrapper = shallow(<Footer />)
    expect(wrapper).toMatchSnapshot();
});
