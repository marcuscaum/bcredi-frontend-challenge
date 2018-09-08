import React from 'react';
import { shallow } from 'enzyme';

import FormField from '.';

const setup = (props = {}) =>
  shallow(
    <FormField {...props}>
      <div className="to-not-trigger-proptypes" />
    </FormField>
  );

describe('[Component] FormField', () => {
  it('should render the component', () => {
    const wrapper = setup();
    expect(wrapper).toMatchSnapshot();
  });
});
