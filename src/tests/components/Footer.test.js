import React from 'react';
import { shallow } from 'enzyme';
import Footer from '../../components/layouts/Footer';

test('should render Footer', () => {
    const wrapper = shallow(<Footer />);
    expect(wrapper).toMatchSnapshot();
});
