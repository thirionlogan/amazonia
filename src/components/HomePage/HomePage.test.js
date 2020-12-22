import React from 'react';
import { mount } from 'enzyme';
import { handleGetWishlists } from '../../client/client';
import HomePage from './HomePage';
import { Accordion } from '@material-ui/core/';

const flushPromises = () => new Promise(setImmediate);

describe('HomePage', () => {
  let component;

  const mockHandleGetWishlists = jest.fn();

  beforeEach(async () => {
    mockHandleGetWishlists.mockImplementation(handleGetWishlists);
    component = mount(<HomePage handleGetWishlists={mockHandleGetWishlists} />);
    await flushPromises();
    component.update();
  });

  afterEach(() => {
    mockHandleGetWishlists.mockReset();
  });

  it('should load wishlists', async () => {
    expect(mockHandleGetWishlists).toBeCalled();
    expect(component.find(Accordion)).toHaveLength(2);
  });
});
