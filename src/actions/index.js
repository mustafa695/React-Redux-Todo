export const addTodo = (list) => {
 
  return {
    type: 'ADD_TODO',
    id: Math.floor(Math.random() * 100),
    list: list,
  };
};

export const removeTodo = (id) => {

  return {
    type: 'REMOVE_TODO',
    id
  }
}

export const editTodo = (id, updateList) => {
  
  return {
    type: 'EDIT_TODO',
    id,
    updateList:updateList,
  }
}