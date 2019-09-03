import React from "react";
import Enzyme, { mount } from "enzyme";
import App from "./appDeep.js";

describe("test", () => {
  const app = mount(<App/>);
  const comp1 = app.find("Component1");
  const comp2 = app.find("Component2");
  const comp3 = app.find("Component3");

  test("renders", () => {
    expect(app.exists()).toBe(true);
    expect(app.childAt(0).hasClass("app")).toEqual(true);
    expect(app.childAt(0).children().length).toBe(2);
  });

  test("comp1", () => {
    expect(comp1.exists()).toBe(true);
    expect(comp1.length).toEqual(1);
    var target = comp1.childAt(0);
    expect(target.hasClass("comp1")).toEqual(true);
    // expect(target.props("header")).toEqual("Comp1");
  });

  test("comp2", () => {
    expect(comp2.exists()).toBe(true);
    expect(comp2.length).toEqual(1);
    var target = comp2.childAt(0);
    expect(target.hasClass("comp2")).toEqual(true);
    expect(target.children().length).toBe(1);
    expect(target.find("Component3").exists()).toBe(true);
    // expect(target.props().header).toEqual("Comp2");
  });

  test("comp3", () => {
    expect(comp3.exists()).toBe(true);
    expect(comp3.length).toEqual(1);
    var target = comp3.childAt(0);
    expect(target.hasClass("comp3")).toEqual(true);
    // expect(target.props().header).toEqual("Comp2");
  });
});
