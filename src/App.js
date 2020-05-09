import React, { useState, useEffect } from 'react';
import { View } from './components'
import { Todos } from './pages';
import { getList, addItem, removeItem } from './apis';

function App() {
  const [data, setData] = useState([]);
  const onAdd = (value) => {
    addItem(value).then((response) => {
      setData(response.data);
    });
  }
  const onRemove = (index) => {
    removeItem(index).then((response) => {
      setData(response.data);
    });
  }
  useEffect(() => {
    getList().then((response) => {
      setData(response.data);
    });
  }, [])
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
