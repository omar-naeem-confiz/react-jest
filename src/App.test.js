import React from 'react';
import { shallow } from 'enzyme';
import App from './App';
beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('list', "[\"item1\", \"item2\"]")
});
it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});
