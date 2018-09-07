import React from "react";
import { shallow } from "enzyme";

import SideImage from "./index";

const setup = props => shallow(<SideImage {...props} />);

describe("[Component] SideImage", () => {
  it("should render the component", () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
