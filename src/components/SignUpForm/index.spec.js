import React from 'react';
import { shallow } from 'enzyme';

import SignUpForm from '.';

const setup = props => shallow(<SignUpForm {...props} />);

describe('[Component] SignUpForm', () => {
  it('should render the component', () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
