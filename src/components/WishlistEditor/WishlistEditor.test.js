import React from 'react';
import { mount } from 'enzyme';
import { TextField, Button } from '@material-ui/core/';

import WishlistEditor from './WishlistEditor';

describe('Wishlist Editor', () => {
  let component;
  const wishlist = {
    name: "Kanye's wishlist",
    author: 'Yeezy',
    items: ['a clone of myself', 'a pair of Yeezys', 'MAGA hat'],
  };

  global.fetch = jest.fn(() =>
    Promise.resolve({
      json: () => Promise.resolve({ created: true }),
    })
  );

  beforeEach(() => {
    component = mount(<WishlistEditor />);
  });

  it('sends request to backend when wishlist is made', () => {
    let nameInput = component.find(TextField).at(0).find('input');
    nameInput.simulate('change', { target: { value: wishlist.name } });

    let authorInput = component.find(TextField).at(1).find('input');
    authorInput.simulate('change', { target: { value: wishlist.author } });

    let itemInputOne = component.find(TextField).at(2).find('input');
    itemInputOne.simulate('change', { target: { value: wishlist.items[0] } });

    let itemInputTwo = component.find(TextField).at(3).find('input');
    itemInputTwo.simulate('change', { target: { value: wishlist.items[1] } });

    let itemInputThree = component.find(TextField).at(4).find('input');
    itemInputThree.simulate('change', { target: { value: wishlist.items[2] } });

    const saveButton = component.find(Button);
    saveButton.simulate('click');

    expect(fetch).toBeCalledWith('http://localhost:3001/wishlist', {
      method: 'POST',
      body: JSON.stringify(wishlist),
      headers: {
        'Content-Type': 'application/json',
      },
    });
  });

  it('should add item fields as they are input', () => {
    expect(component.find(TextField).at(3).exists('input')).toBe(false);
    let itemInputOne = component.find(TextField).at(2).find('input');
    itemInputOne.simulate('change', { target: { value: wishlist.items[0] } });
    expect(component.find(TextField).at(3).exists('input')).toBe(true);
  });

  describe('input validation', () => {
    it('should require a name', () => {
      let authorInput = component.find(TextField).at(1).find('input');
      authorInput.simulate('change', { target: { value: wishlist.author } });

      let itemInputOne = component.find(TextField).at(2).find('input');
      itemInputOne.simulate('change', { target: { value: wishlist.items[0] } });

      let itemInputTwo = component.find(TextField).at(3).find('input');
      itemInputTwo.simulate('change', { target: { value: wishlist.items[1] } });

      let itemInputThree = component.find(TextField).at(4).find('input');
      itemInputThree.simulate('change', {
        target: { value: wishlist.items[2] },
      });

      const saveButton = component.find(Button);
      saveButton.simulate('click');

      let nameInput = component.find(TextField).at(0);

      expect(fetch).not.toBeCalled();
      expect(nameInput.prop('error')).toBe(true);
      expect(nameInput.prop('helperText')).toBe('Name is required');
    });
    it('should require a author', () => {
      let nameInput = component.find(TextField).at(0).find('input');
      nameInput.simulate('change', { target: { value: wishlist.name } });

      let itemInputOne = component.find(TextField).at(2).find('input');
      itemInputOne.simulate('change', { target: { value: wishlist.items[0] } });

      let itemInputTwo = component.find(TextField).at(3).find('input');
      itemInputTwo.simulate('change', { target: { value: wishlist.items[1] } });

      let itemInputThree = component.find(TextField).at(4).find('input');
      itemInputThree.simulate('change', {
        target: { value: wishlist.items[2] },
      });

      const saveButton = component.find(Button);
      saveButton.simulate('click');

      let authorInput = component.find(TextField).at(1);

      expect(fetch).not.toBeCalled();
      expect(authorInput.prop('error')).toBe(true);
      expect(authorInput.prop('helperText')).toBe('Author is required');
    });
    it('should require at least one item', () => {
      let nameInput = component.find(TextField).at(0).find('input');
      nameInput.simulate('change', { target: { value: wishlist.name } });

      let authorInput = component.find(TextField).at(1).find('input');
      authorInput.simulate('change', { target: { value: wishlist.author } });

      const saveButton = component.find(Button);
      saveButton.simulate('click');

      let itemInput = component.find(TextField).at(2);

      expect(fetch).not.toBeCalled();
      expect(itemInput.prop('error')).toBe(true);
      expect(itemInput.prop('helperText')).toBe(
        'At least one item is required'
      );
    });
  });
});
