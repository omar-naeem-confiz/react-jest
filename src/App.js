import React, { useState, useEffect } from 'react';
import { View } from './components'
import { Todos } from './pages';
import { getList, addItem, removeItem } from './apis';

function App() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(false);

  const onAdd = (value) => {
    setLoading(true);
    addItem(value).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }
  const onRemove = (index) => {
    setLoading(true);
    removeItem(index).then((response) => {
      setData(response.data);
      setLoading(false);
    });
  }
  useEffect(() => {
    setLoading(true);
    getList().then((response) => {
      setData(response.data);
      setLoading(false);
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
        loading={loading}
      />
    </View>
  );
}

export default App;
