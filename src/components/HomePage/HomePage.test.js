import React from 'react';
import { mount } from 'enzyme';
import { handleGetWishlists } from '../../client/client';
import HomePage from './HomePage';
import { Accordion } from '@material-ui/core/';

describe('HomePage', () => {
  let component;

  const mockHandleGetWishlists = jest.fn();

  beforeEach(() => {
    mockHandleGetWishlists.mockImplementation(handleGetWishlists);
    component = mount(<HomePage handleGetWishlists={mockHandleGetWishlists} />);
  });

  afterEach(() => {
    mockHandleGetWishlists.mockReset();
  });
  it('should load wishlists', () => {
    expect(mockHandleGetWishlists).toBeCalled();
    expect(component.find(Accordion)).toHaveLength(2);
  });
});
