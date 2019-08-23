import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./appBasic.js";

describe("test", () => {
  test("renders", () => {
    const app = shallow(<App/>);
    expect(app.exists()).toBe(true);
    expect(app.exists('h1')).toBe(true);
    expect(app.exists("p")).toBe(true);
    expect(app.hasClass("app")).toEqual(true);
    expect(app.children().length).toEqual(2);
  });
});
