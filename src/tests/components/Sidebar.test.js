import React from 'react';
import { shallow } from 'enzyme';
import { Sidebar } from '../../components/layouts/Sidebar';

test('should render Sidebar', () => {
    const wrapper = shallow(<Sidebar showSidebar />);
    expect(wrapper).toMatchSnapshot();
});
