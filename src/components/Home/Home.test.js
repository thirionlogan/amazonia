import { mount, shallow } from "enzyme";
import React from "react";
import Home from "./Home";
import PageHeader from "../PageHeader/PageHeader";
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
  let useEffect;

  const mockUseEffect= () => {
      useEffect.mockImplementationOnce(f => f());
  }

  beforeEach(() => {
    HomeWrapper = shallow(<Home />);
  });

  it("renders the page header component", () => {
    expect(HomeWrapper.find(PageHeader)).toHaveLength(1);
  });

  it("creates an accordian of wishlists", () => {
    expect(HomeWrapper.find(Accordion)).not.toBeNull();
  });

  it("fetches data and puts them into the wishlist", () => {
    const useEffect = jest.spyOn(React, "useEffect").mockImplementation(f => f())
    expect(fetch).toHaveBeenCalled();
  });
});
