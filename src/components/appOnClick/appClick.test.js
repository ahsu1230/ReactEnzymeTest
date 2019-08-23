import React from "react";
import ReactDOM from 'react-dom';
import Enzyme, { mount, shallow } from "enzyme";
import { Link } from 'react-router';
import { MemoryRouter } from 'react-router-dom';
import { App, AppLink } from "./appClick.js";

describe("test", () => {
  // const app = mount(<MemoryRouter><App/></MemoryRouter>);
  // const appLink = shallow(<AppLink/>);

  test("renders", () => {
    // expect(appLink.exists()).toBe(true);
    // expect(appLink.find('Link').exists()).toBe(true);
    // expect(app.find('Link').props().to).toBe("/page2");
  });
});
