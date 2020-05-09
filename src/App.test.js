import React from 'react';
import { shallow, mount } from 'enzyme';
import { act } from 'react-dom/test-utils';
import App from './App';
import { ListItem, Input, Button } from './components';
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

it('mount whole component with mocks', async () => {
  let wrapper;
  await act(() => {
    wrapper = mount(<App />);
  });
  await wrapper.update();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(ListItem)).toHaveLength(2);

  // adding an item
  await act(() => {
    wrapper.find(Input).find('input').simulate('change', { target: { value: 'item3' } });
    wrapper.find(Button).find('button').simulate('click');
  });
  await wrapper.update();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(ListItem)).toHaveLength(3);
  console.log(wrapper.find(ListItem).map(each => each.text()))

  // removing last item
  await act(() => {
    wrapper.find('[className="cancelButton"]').at(0).simulate('click');
  });
  await wrapper.update();
  expect(wrapper).toMatchSnapshot();
  expect(wrapper.find(ListItem)).toHaveLength(2);
});
