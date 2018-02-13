import { connect } from 'react-redux'
import ListControls from '../components/ListControls/ListControls';

const getActiveTodos = (todos) => {
  return todos.filter(t => t.completed === false).length
}

const getCompletedTodos = (todos) => {
  return todos.filter(t => t.completed === true).length
}


const mapStateToProps = state => {
  return {
    activeTodos: getActiveTodos(state.todos),
    completedTodos: getCompletedTodos(state.todos)
  }
}

const TodoStats = connect(mapStateToProps)(ListControls);


export default TodoStats;