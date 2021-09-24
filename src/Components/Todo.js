import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addTodo, removeTodo, editTodo } from '../actions/index';

function Todo() {
  const dispatch = useDispatch();
  const list = useSelector((state) => state.todoReducers.list);
  const [value, setValue] = useState('');
  const [editVal, setEditVal] = useState('')
  const [updatedInput, setUpdateInput] = useState(false);
  
  // const [todoList, setTodoList] = useState(list)

  console.log(list,'List Main')

  const addAction = () => {
  
    dispatch(addTodo(value))
    setValue("");
    
    
  }

  //show edit Input box
  const showEdit = (item) => {
    
    setUpdateInput(item?.id)
    setEditVal(item?.list)

  };
  const update = (id) =>{
    
    dispatch(editTodo(id, editVal))
    setUpdateInput(false)
    console.log('Edit ID', id)
  }

  return (
    <>
      <div className="todo-form">
        <input
          type="text"
          placeholder="Enter Todos..."
          className="todo"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button
          type="button"
          className="todo-btn"
          onClick={addAction}
        >
          Add Todo
        </button>
      </div>

      <div className="set">
        {list.map((item) => {
          return (
            <div className="todo_show" key={item.id}>
              {updatedInput === item.id ? (
                <>
                  <input type="text" name="text" value={editVal} onChange={(e) => setEditVal(e.target.value)}/>
                  <button className="btn update" onClick={() => update(item.id)}>Update</button>
                </>
              ) : (
                <>
                  {' '}
                  <h4>{item.list}</h4>
                  <button
                    type="button"
                    className="btn edit"
                    onClick={() => showEdit(item)}
                  >
                    Edit
                  </button>
                </>
              )}
              <button
                type="button"
                className="btn remove"
                onClick={() => dispatch(removeTodo(item.id))}
              >
                Remove
              </button>
            </div>
          );
        })}
      </div>
    </>
  );
}

export default Todo;
