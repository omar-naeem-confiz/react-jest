import React, { useState, useEffect } from 'react';
import { View } from './components'
import { Todos } from './pages';
import { getList, addItem, removeItem } from './apis';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAdd = async (value) => {
    setLoading(true);
    const response = await addItem(value);
    setData(response.data);
    setLoading(false);
  }
  const onRemove = async (index) => {
    setLoading(true);
    const response = await removeItem(index);
    setData(response.data);
    setLoading(false);
  }
  useEffect(async () => {
    setLoading(true);
    const response = await getList();
    setData(response.data);
    setLoading(false);
  }, [])
  return (
    <View
      className="App"
    >
      <Todos
        data={data}
        onAdd={onAdd}
        onRemove={onRemove}
        loading={loading}
      />
    </View>
  );
}

export default App;
