
export const getList = () => {
  return {
    status: 200,
    message: 'success',
    data: JSON.parse(localStorage.getItem('list') || '[]')
  }
}

export const addItem = (item) => {
  const newList = JSON.parse(localStorage.getItem('list') || '[]');
  newList.push(item);
  localStorage.setItem('list', JSON.stringify(newList));
  return {
    status: 200,
    message: 'success',
    data: newList
  }
}

export const removeItem = (index) => {
  const newList = JSON.parse(localStorage.getItem('list') || '[]');
  newList.splice(index, 1);
  localStorage.setItem('list', JSON.stringify(newList));
  return {
    status: 200,
    message: 'success',
    data: newList
  }
}
