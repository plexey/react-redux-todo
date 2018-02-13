// visibilityFilter.js

// Action Types

const SET_VISIBILITY_FILTER = 'redux-todo/modules/visibilityFilter/SET_VISIBILITY_FILTER';

// Reducer

const visibilityFilter = (state = 'SHOW_ALL', action) => {
  switch (action.type) {
    case SET_VISIBILITY_FILTER:
      return action.filter
    default:
      return state
  }
}

// Action Creators

export const setVisibilityFilter = filter => {
  return {
    type: SET_VISIBILITY_FILTER,
    filter
  }
} 

export default visibilityFilter