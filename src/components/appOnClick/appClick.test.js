import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { shallow } from "enzyme";
import App from "./appClick.js";

var mockProps = {
  handleClick: jest.fn()
};

describe("test", () => {
  const app = shallow(<App {...mockProps}/>);
  const handleClickSpy = jest.spyOn(app.instance(), "handleClick");
  app.instance().forceUpdate();

  it("renders", () => {
    expect(app.exists()).toBe(true);
    expect(app.find("button").exists()).toBe(true);
  });

  it("clicks", () => {
    expect(handleClickSpy).toHaveBeenCalledTimes(0);
    app.find("button").simulate("click");

    expect(handleClickSpy).toHaveBeenCalled();
    expect(handleClickSpy).toHaveBeenCalledTimes(1);
  });
});
