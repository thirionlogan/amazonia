import React from 'react';
import { shallow } from 'enzyme';
import { TextField } from '@material-ui/core';

import PageHeader from './PageHeader';

describe('PageHeader', () => {
  let component;
  beforeEach(() => {
    component = shallow(<PageHeader />);
  });

  it('Does header have an image', () => {
    expect(component.exists('img')).toBe(true);
  });

  it('Does header contain a seach bar', () => {
    expect(component.exists(TextField)).toBe(true);
  });
});
