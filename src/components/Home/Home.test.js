import { mount, shallow } from "enzyme";
import React from "react";
import Home from "./Home";

import Accordion from "@material-ui/core/Accordion";

describe("Home", () => {
  const lists = [
    {
      id: 1,
      name: "Bob's wishlist",
      author: "Bob12",
      items: [
        { id: 1, wishlist_id: 1, name: "skateboard" },
        { id: 2, wishlist_id: 1, name: "toothbrush" },
      ],
    },
    {
      id: 2,
      name: "Allens's wishlist",
      author: "Allen",
      items: [{ id: 3, wishlist_id: 2, name: "coal" }],
    },
  ];

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ lists }),
    })
  );
  let HomeWrapper;

  beforeEach(() => {
    HomeWrapper = mount(<Home />);
  });

  it("loads the wishlists", () => {
    expect(fetch).toHaveBeenCalledWith("http://localhost:3001/wishlist", {
      method: "GET",
      headers: { "Content-Type": "application/json" },
    });
    expect(HomeWrapper.find('Accordion')).toHaveLength(2)
    expect(HomeWrapper.find('Accordion').at(0).text()).toEqual(lists[0].name)

  });
  // accordian should be closed
  //accordian click
  //accourdian should be open
});
