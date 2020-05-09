import React, { useState } from 'react';
import logo from './logo.svg';
import { Button, Input, View, List, ListItem } from './components'

function App() {
  const [value, setValue] = useState('');
  const localStorageList = JSON.parse(localStorage.getItem('list') || '[]');
  const [list, setList] = useState(localStorageList);
  const onAdd = () => {
    const newList = [...list];
    newList.push(value);
    setValue('');
    setList(newList);
    localStorage.setItem('list', JSON.stringify(newList));
  }
  const onRemove = (index) => () => {
    const newList = [...list];
    newList.splice(index, 1);
    setList(newList);
    localStorage.setItem('list', JSON.stringify(newList));
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
          <Button style={{ marginLeft: 20, width: 100 }} label='Add' onClick={onAdd} />
        </View>
        <List style={{
          overflowY: 'auto',
          width: '100%',
        }}>
          {
            list.map((item, index) => (
              <ListItem key={index} onCancel={onRemove(index)}>{item}</ListItem>
            ))
          }
        </List>
      </View>
    </View>
  );
}

export default App;
