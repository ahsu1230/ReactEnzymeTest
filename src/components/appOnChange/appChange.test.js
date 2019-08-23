import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./appChange.js";

describe("test", () => {
  const app = shallow(<App/>);

  test("renders", () => {
    expect(app.exists()).toBe(true);
    expect(app.exists("input")).toBe(true);
  });

  test("test change once", () => {
    expect(app.find("input").props().value).toBe("");

    app.find("input").simulate("change", {
      target: {value: "hello"}
    });

    expect(app.find("input").props().value).toBe("hello");
  });

  test("test change again", () => {
    expect(app.find("input").props().value).toBe("hello");

    app.find("input").simulate("change", {
      target: {value: "goodbye"}
    });

    expect(app.find("input").props().value).toBe("goodbye");
  });
});
