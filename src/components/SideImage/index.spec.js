import React from 'react';
import { shallow } from 'enzyme';

import SideImage from '.';

const setup = props => shallow(<SideImage {...props} />);

describe('[Component] SideImage', () => {
  it('should render the component', () => {
    const wrapper = setup({
      message: 'Test message',
      messageAuthor: 'Test message author',
    });
    expect(wrapper).toMatchSnapshot();
  });
});
