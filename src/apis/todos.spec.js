import React from 'react';
import { shallow } from 'enzyme';
import { getList, addItem, removeItem } from '.';

beforeEach(() => {
  localStorage.clear();
  localStorage.setItem('list', "[\"item1\", \"item2\"]")
});

it('getList', async () => {
  const data = await getList();
  expect(data).toStrictEqual({
    status: 200,
    message: 'success',
    data: ['item1', 'item2']
  });
});

it('addItem', () => {
  addItem('item3').then((data) => {
    expect(data).toStrictEqual({
      status: 200,
      message: 'success',
      data: ['item1', 'item2', 'item3']
    });
  });
});

it('removeItem', (done) => {
  removeItem(1).then((data) => {
    expect(data).toStrictEqual({
      status: 200,
      message: 'success',
      data: ['item1']
    });
    done();
  }).catch(done.fail);
});
