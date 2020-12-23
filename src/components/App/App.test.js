import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

describe('renders App', () => {
  const component = shallow(<App />);

  it('should have a page header', () => {
    expect(component.exists('PageHeader')).toBe(true);
  });
});
