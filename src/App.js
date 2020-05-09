import React, { useState } from 'react';
import { View } from './components'
import { Todos } from './pages';

function App() {
  const [data, setData] = useState(JSON.parse(localStorage.getItem('list') || '[]'));
  const onAdd = (value) => {
    const newList = [...data];
    newList.push(value);
    setData(newList);
    localStorage.setItem('list', JSON.stringify(newList));
  }
  const onRemove = (index) => {
    const newList = [...data];
    newList.splice(index, 1);
    setData(newList);
    localStorage.setItem('list', JSON.stringify(newList));
  }
  return (
    <View
      className="App"
    >
      <Todos
        data={data}
        onAdd={onAdd}
        onRemove={onRemove}
      />
    </View>
  );
}

export default App;
