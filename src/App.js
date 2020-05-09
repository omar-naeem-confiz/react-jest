import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Input, View } from './components'

function App() {
  const [value, setValue] = useState('');
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
          minHeight: 600,
          backgroundColor: 'white',
          alignItems: 'center',
          borderRadius: 6,
          padding: 20,
          boxShadow: '0px 0px 3px 3px rgba(0,0,0,0.1)'
        }}
      >
        <View
          style={{
            flexDirection: 'row',
            alignItems: 'flex-end'
          }}
        >
          <Input style={{ margin: 20, width: 400 }} label={'Todo'} value={value} onChange={setValue} />
          <Button style={{ margin: 20, marginLeft: 0, width: 100 }} label='Add' />
        </View>
      </View>
    </View>
  );
}

export default App;
