import React from 'react';
import { shallow } from 'enzyme';

import Button from '.';

const setup = (
  props = {
    type: 'primary',
  }
) => shallow(<Button {...props} />);

describe('[Component] Button', () => {
  it('should render the component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
