import React from 'react';
import { shallow, mount } from 'enzyme';
import App from './App';
import { ListItem } from './components';

jest.mock('./apis/todos.js');

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('list', "[\"item1\", \"item2\"]");
});

it('renders without crashing', () => {
  const wrapper = shallow(<App />);
  expect(wrapper).toMatchSnapshot();
});

it('mount whole component with mocks', () => {
  const wrapper = mount(<App />);
  // expect(wrapper.find(ListItem)).toHaveLength(2);
  expect(wrapper).toMatchSnapshot();
});
