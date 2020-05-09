import React from 'react';
import { shallow } from 'enzyme';
import { getList, addItem, removeItem } from '.';

describe('with existing data in localStorage', () => {
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
})

describe('with no data in localStorage', () => {
  beforeEach(() => {
    localStorage.clear();
  });

  it('getList', async () => {
    const data = await getList();
    expect(data).toStrictEqual({
      status: 200,
      message: 'success',
      data: []
    });
  });

  it('addItem', () => {
    addItem('item3').then((data) => {
      expect(data).toStrictEqual({
        status: 200,
        message: 'success',
        data: ['item3']
      });
    });
  });

  it('removeItem', (done) => {
    removeItem(1).then((data) => {
      expect(data).toStrictEqual({
        status: 200,
        message: 'success',
        data: []
      });
      done();
    }).catch(done.fail);
  });
})
