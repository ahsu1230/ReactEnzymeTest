import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./appMap.js";

describe("test", () => {
  const app = shallow(<App/>);

  test("renders", () => {
    expect(app.exists()).toBe(true);
    expect(app.exists("ul")).toBe(true);
  });

  test("test props change", () => {
    expect(app.find("ul").children().length).toBe(0);

    app.setState({
      content: ["a", "b", "c", "d", "e", "f"]
    });

    var children = app.find("ul").children();
    expect(children.length).toBe(6);

    expect(children.first().props().content).toBe("a");
    expect(children.first().is("Item")).toBe(true);

    expect(children.last().props().content).toBe("f");
    expect(children.last().is("Item")).toBe(true);

    expect(children.get(2).props.content).toBe("c");
  });
});
