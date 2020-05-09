import React from 'react';
import { mount } from 'enzyme';
import { Button } from '.';

it('render Button', () => {
  let recorderEvent;
  const wrapper = mount(
    <Button
      label="Add"
      onClick={() => {
        recorderEvent = 'click'
      }}
    />
  );
  expect(wrapper).toMatchSnapshot();
  wrapper.find('button').simulate('click');
  expect(recorderEvent).toBe('click');
});
