import React from 'react';
import { shallow } from 'enzyme';
import { ActionButton } from '../../components/common-components/ActionButton';

test('should render', () => {
    const wrapper = shallow(<ActionButton type="primary" />);
    expect(wrapper).toMatchSnapshot();
});

test('should trigger function with element', () => {
    const argument = 'test';
    const targetFn = jest.fn();
    const wrapper = shallow(
        <ActionButton
            type="primary"
            onClickActionFunction={targetFn}
            itemToArguments={argument}
        />
    );
    wrapper.find('.action-button').prop('onClick')();
    expect(targetFn).toHaveBeenLastCalledWith(argument);
});
