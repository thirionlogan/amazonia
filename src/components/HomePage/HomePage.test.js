import React from 'react';
import { mount } from 'enzyme';
import { handleGetWishlists } from '../../client/client';
import HomePage from './HomePage';
import { Accordion } from '@material-ui/core/';

describe('HomePage', () => {
  let component;

  const mockHandleGetWishlists = jest.fn();

  beforeEach(async () => {
    mockHandleGetWishlists.mockImplementation(handleGetWishlists);
    component = mount(<HomePage handleGetWishlists={mockHandleGetWishlists} />);
  });

  afterEach(() => {
    mockHandleGetWishlists.mockReset();
  });

  it('should load wishlists', async () => {
    expect(mockHandleGetWishlists).toBeCalled();
    mockHandleGetWishlists()
      .then((res) => res.json())
      .then(console.log);
    expect(component.exists(Accordion)).toBeTruthy();
  });
});
