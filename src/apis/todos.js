const delay = 1000;

export const getList = () => {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({
        status: 200,
        message: 'success',
        data: JSON.parse(localStorage.getItem('list') || '[]')
      })
    }, delay)
  })
}

export const addItem = (item) => {
  return new Promise((resolve) => {
    const newList = JSON.parse(localStorage.getItem('list') || '[]');
    newList.push(item);
    localStorage.setItem('list', JSON.stringify(newList));
    setTimeout(() => {
      resolve({
        status: 200,
        message: 'success',
        data: newList
      })
    }, delay)
  })
}

export const removeItem = (index) => {
  return new Promise((resolve) => {
    const newList = JSON.parse(localStorage.getItem('list') || '[]');
    newList.splice(index, 1);
    localStorage.setItem('list', JSON.stringify(newList));
    setTimeout(() => {
      resolve({
        status: 200,
        message: 'success',
        data: newList
      })
    }, delay)
  })
}
