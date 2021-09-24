const initialState = {
  list: [],
  
};

const todoReducers = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO':
      return {
        state,
        list: [...state.list,{id: action.id,list: action.list}],
      }

      case 'REMOVE_TODO':
        const newList = state.list.filter((item) => item.id !== action.id)
        return{
          ...state,
          list: newList
        }
      
      case 'EDIT_TODO':
       
        const newValue = state.list.filter((item) => item.id === action.id? item.list = action.updateList: item)
        
        return{
          ...state,
          list: newValue
          
        }

    default:
      return state;
  }
};

export default todoReducers;
