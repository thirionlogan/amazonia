import { mount } from "enzyme";
import React from "react";
import HomePage from "./HomePage";

import { Accordion } from "@material-ui/core";

describe("HomePage", () => {
  let component;


  beforeEach(() => {
    component = mount(<HomePage />);
    fetchMock.mockOnce("Hello!")
  });

  it("should load wishlists", () => {
    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/wishlists", {
      method: "GET",
      headers: {
        'Content-Type': 'application/json'
      },
    });
  });
});
