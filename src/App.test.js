import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from './App';
import { ListItem, Input, Button, Text } from './components';
import { Todos } from './pages';

jest.mock('./apis/todos.js');

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('list', "[\"item1\", \"item2\"]");
});

it('mount whole component with mocks', async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(<App />);
  });
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(ListItem)).toHaveLength(2);

  // adding an item
  act(() => {
    wrapper.find(Input).find('input').simulate('change', { target: { value: 'item3' } });
  });
  wrapper.update();
  expect(wrapper.find(Input).find('input').props().value).toBe('item3');
  await act(() => {
    wrapper.find(Button).find('button').simulate('click');
  });
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(ListItem)).toHaveLength(3);
  expect(wrapper.find(ListItem).last().find(Text).first().text()).toBe('item3')

  // removing last item
  await act(() => {
    wrapper.find('[className="cancelButton"]').at(0).simulate('click');
  });
  wrapper.update();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(ListItem)).toHaveLength(2);
});
