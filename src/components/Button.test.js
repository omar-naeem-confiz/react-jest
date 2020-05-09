import React from 'react';
import { mount } from 'enzyme';
import { Button } from '.';

it('render Button', () => {
  const wrapper = mount(
    <Button
      label="Add"
      onClick={() => {
        expect(1).toBe(1)
      }}
    />
  );
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('click')
});
