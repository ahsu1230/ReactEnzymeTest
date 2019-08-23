import React from "react";
import Enzyme, { shallow } from "enzyme";
import App1 from "./app1.js";

describe("test1", () => {
  test("renders", () => {
    const app = shallow(<App1/>);
    expect(app.exists()).toBe(true);
  });
});
