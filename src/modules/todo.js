// todo.js

// Action Types

const ADD_TODO = 'redux-todo/modules/todo/ADD_TODO';
const REMOVE_TODO = 'redux-todo/modules/todo/REMOVE_TODO';
const TOGGLE_TODO = 'redux-todo/modules/todo/TOGGLE_TODO';

// Reducer

const todos = (state = [], action) => {
  switch (action.type) {
    case ADD_TODO:
      return [
        ...state,
        {
          id: action.id,
          text: action.text,
          completed: false
        }
      ]
    case REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.id)
    }
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    default:
      return state
  }
}

// Action Creators

let nextTodoId = 0
export const addTodo = text => {
  return {
    type: ADD_TODO,
    id: nextTodoId++,
    text
  }
}

export const removeTodo = id => {
  return {
    type: REMOVE_TODO,
    id: id
  }
}
export const toggleTodo = id => {
  return {
    type: TOGGLE_TODO,
    id
  }
}

export default todos