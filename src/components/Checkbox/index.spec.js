import React from 'react';
import { shallow } from 'enzyme';

import Checkbox from '.';

const setup = (
  props = {
    label: 'Test label',
    name: 'test-name',
  }
) => shallow(<Checkbox {...props} />);

describe('[Component] Checkbox', () => {
  it('should render the component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
