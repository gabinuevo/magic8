import React from "react";
import { shallow, mount } from "enzyme";
import EightBall
  from "./EightBall";

it("renders using shallow", function() {
  // this test passes
  shallow(<EightBall />);
});

it("renders using mount", function() {
  // this test fails!
  mount(<EightBall />);
});