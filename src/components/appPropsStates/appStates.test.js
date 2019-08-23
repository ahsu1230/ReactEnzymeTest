import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./appStates.js";

describe("test", () => {
  const app = shallow(<App/>);

  test("renders", () => {
    expect(app.exists()).toBe(true);
    expect(app.exists("h1")).toBe(true);
    expect(app.exists("p")).toBe(true);
  });

  test("test props change", () => {
    // Before
    expect(app.find("p").text()).toBe("");

    // Change
    app.setProps({message: "new message"});

    // After
    expect(app.find("p").text()).toBe("new message");
  });

  test("test state change", () => {
    // Before
    expect(app.find("h1").text()).toBe("");

    // Change
    app.setState({ title: "welcome"});

    // After
    expect(app.find("h1").text()).toBe("welcome");
  });
});
