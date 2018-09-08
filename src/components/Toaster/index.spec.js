import React from 'react';
import { shallow } from 'enzyme';

import Toaster from '.';

const setup = (props = {}) => shallow(<Toaster {...props} />);

describe('[Component] Toaster', () => {
  it('should render the component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
