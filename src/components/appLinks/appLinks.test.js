import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./appLinks.js";

describe("test", () => {
  const app = shallow(<App/>);

  test("renders", () => {
    expect(app.exists()).toBe(true);
    expect(app.find("Link").exists()).toBe(true);
    expect(app.find("Link").props().to).toBe("/page2");
  });
});
