// todo.js

// Action Types

const ADD_TODO = 'redux-todo/todos/ADD_TODO';
const EDIT_TODO = 'redux-todo/todos/EDIT_TODO';
const REMOVE_TODO = 'redux-todo/todos/REMOVE_TODO';
const TOGGLE_TODO = 'redux-todo/todos/TOGGLE_TODO';
const TOGGLE_ALL_TODOS = 'redux-todo/todos/TOGGLE_ALL_TODOS';
const REMOVE_COMPLETED = 'redux-todo/todos/REMOVE_COMPLETED';
const REMOVE_ALL = 'redux-todo/todos/REMOVE_ALL';

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
    case EDIT_TODO: {
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, text: action.text }
          : todo
      )
    }
    case REMOVE_TODO: {
      return state.filter(todo => todo.id !== action.id)
    }
    case TOGGLE_TODO:
      return state.map(todo =>
        (todo.id === action.id)
          ? { ...todo, completed: !todo.completed }
          : todo
      )
    case TOGGLE_ALL_TODOS: {
      return state.every(todo => todo.completed === true)
        ? state.map(todo => ({ ...todo, completed: false }))
        : state.map(todo => ({ ...todo, completed: true }))
    }
    case REMOVE_COMPLETED: {
      return state.filter(todo => todo.completed === false)
    }
    case REMOVE_ALL: {
      return state = []
    }
    default:
      return state
  }
}

// Action Creators

let nextTodoId = 0

export const addTodo = text => ({
  type: ADD_TODO,
  id: nextTodoId++,
  text
})

export const editTodo = ({ id, text }) => ({
  type: EDIT_TODO,
  id: id,
  text: text
})

export const removeTodo = id => ({
  type: REMOVE_TODO,
  id: id
})

export const toggleTodo = id => ({
  type: TOGGLE_TODO,
  id
})

export const toggleAllTodos = () => ({
  type: TOGGLE_ALL_TODOS
})

export const removeCompleted = () => ({
  type: REMOVE_COMPLETED
})

export const removeAll = () => ({
  type: REMOVE_ALL
})

export default todos