import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./appImages.js";

describe("test", () => {
  test("renders", () => {
    const app = shallow(<App/>);
    expect(app.exists()).toBe(true);
    expect(app.find("img").length).toBe(3);
  });
});
