import React from "react";
import Enzyme, { shallow } from "enzyme";
import App from "./appJsons.js";
import { mainRepo } from './jsonRepo.js';

mainRepo.all = jest.fn().mockImplementation(() => [
  {name: "a", nickname: "b"}
]);

describe("mocked test", () => {
  const app = shallow(<App/>);

  test("renders with mock", () => {
    var first = app.find("li").first();
    expect(first.text()).toContain("a");
    expect(first.text()).toContain("b");
    expect(app.find("li").length).toBe(1);
  });
});
