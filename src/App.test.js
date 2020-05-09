import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from './App';
import { ListItem } from './components';
import { Todos } from './pages';

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
  expect(wrapper).toMatchSnapshot();
  // adding an item
  wrapper.find('input').simulate('change', { target: { value: 'item3' } });
  wrapper.find('button').simulate('click');
  expect(wrapper).toMatchSnapshot();
});
