import React from 'react';
import { shallow } from 'enzyme';

import NavBar from '.';

const setup = (props = {}) => shallow(<NavBar {...props} />);

describe('[Component] NavBar', () => {
  it('should render the component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
