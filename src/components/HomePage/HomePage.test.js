import React from 'react';
import { mount } from 'enzyme';
import { handleGetWishlists } from '../../client/client';
import HomePage from './HomePage';
import { MemoryRouter, Route } from 'react-router-dom';
import { Accordion, Fab } from '@material-ui/core/';

describe('HomePage', () => {
  let component;
  const mockHandleGetWishlists = jest.fn();

  beforeEach(() => {
    mockHandleGetWishlists.mockImplementation(handleGetWishlists);
    component = mount(
      <MemoryRouter>
        <HomePage handleGetWishlists={mockHandleGetWishlists} />
      </MemoryRouter>
    );
  });

  afterEach(() => {
    mockHandleGetWishlists.mockReset();
  });

  it('should load wishlists', () => {
    expect(mockHandleGetWishlists).toBeCalled();
  });
});
