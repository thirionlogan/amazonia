import React from 'react';
import { mount } from 'enzyme';
import { IconButton, Accordion } from '@material-ui/core/';
import Wishlist from './Wishlist';
import { handleDeleteWishlist } from '../../client/client';

describe('Wishlist', () => {
  let component;
  const wishlist = {
    id: 1,
    name: "Kendra's Wishlist",
    author: 'Kendra',
    items: [
      { name: 'No More EPRs' },
      { name: 'to understand TDD' },
      { name: 'Fun' },
    ],
  };

  const mockHandleDeleteWishlist = jest.fn();

  beforeEach(() => {
    mockHandleDeleteWishlist.mockImplementation(handleDeleteWishlist);
    component = mount(
      <Wishlist
        wishlist={wishlist}
        handleDeleteWishlist={mockHandleDeleteWishlist}
      />
    );
  });

  it('should load wishlist', () => {
    expect(component.text()).toContain(wishlist.name);
    expect(component.text()).toContain(wishlist.author);
    expect(component.text()).toContain(wishlist.items[0].name);
    expect(component.text()).toContain(wishlist.items[1].name);
    expect(component.text()).toContain(wishlist.items[2].name);
  });

  describe('when the accordian is open', () => {
    beforeEach(() => {
      component = mount(
        <Wishlist
          wishlist={wishlist}
          handleDeleteWishlist={mockHandleDeleteWishlist}
          expanded={true}
        />
      );
    });

    it('should delete wishlist when delete button is clicked', () => {
      component.find('button').simulate('click');
      expect(mockHandleDeleteWishlist).toBeCalledWith(wishlist.id);
    });
  });
});
