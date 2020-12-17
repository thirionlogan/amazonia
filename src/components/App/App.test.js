import React from 'react';
import { shallow } from 'enzyme';
import App from './App';

test('renders App', () => {
  const component = shallow(<App />);
  expect(component.exists('PageHeader')).toBe(true);
});
