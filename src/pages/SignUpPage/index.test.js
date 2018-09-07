import React from "react";
import { shallow } from "enzyme";

import SignUpPage from "./index";

const setup = props => shallow(<SignUpPage {...props} />);

describe("[Page] SignUpPage", () => {
  it("should render the page", () => {
    const wrapper = setup({});
    expect(wrapper).toMatchSnapshot();
  });
});
