import React, { useState } from 'react';
import { Button, Input, View, List, ListItem } from '../components'

export const Todos = (props) => {
  const { data, onAdd, onRemove } = props;
  const [value, setValue] = useState('');

  const add = () => {
    onAdd(value);
    setValue('');
  }
  const remove = (index) => () => {
    onRemove(index);
  }
  return (
    <View
      className="App"
      style={{
        height: '100vh',
        backgroundColor: 'rgba(0,0,0,0.1)',
        justifyContent: 'center',
        alignItems: 'center'
      }}
    >
      <View
        style={{
          height: 600,
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 6,
          boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end',
            padding: 20
          }}
        >
          <Input style={{ width: 400 }} label={'Todo'} value={value} onChange={setValue} />
          <Button style={{ marginLeft: 20, width: 100 }} label='Add' onClick={add} />
        </View>
        <List style={{
          overflowY: 'auto',
          width: '100%',
        }}>
          {
            data.map((item, index) => (
              <ListItem key={index} onCancel={remove(index)}>{item}</ListItem>
            ))
          }
        </List>
      </View>
    </View>
  );
}
