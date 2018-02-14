import React from 'react';
import PropTypes from 'prop-types';
import { connect } from 'react-redux'
import { toggleTodo, removeTodo } from '../../modules/todo';
import FlipMove from 'react-flip-move';
import Todo from '../../components/Todo/Todo';
import styles from './TodoList.css';

const TodoList = ({ todos, toggleTodo, removeTodo }) => (
  <FlipMove 
    appearAnimation="fade"
    enterAnimation="fade"
    leaveAnimation="fade"
    className={styles.main} 
    duration={200} 
    easing="ease-out" 
    typeName="ul">
    {todos.map(todo => (
      <Todo 
        key={todo.id} {...todo} 
        id={todo.id} 
        toggleTodo={() => toggleTodo(todo.id)} 
        removeTodo={() => removeTodo(todo.id)} />
    ))}
  </FlipMove>
)

TodoList.propTypes = {
  todos: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      completed: PropTypes.bool.isRequired,
      text: PropTypes.string.isRequired
    }).isRequired
  ).isRequired,
  onTodoClick: PropTypes.func.isRequired
}

// get visible

const getVisibleTodos = (todos, filter) => {
  switch (filter) {
    case 'SHOW_COMPLETED':
      return todos.filter(t => t.completed)
    case 'SHOW_ACTIVE':
      return todos.filter(t => !t.completed)
    case 'SHOW_ALL':
    default:
      return todos
  }
}

// map state to props

const mapStateToProps = state => ({
    todos: getVisibleTodos(state.todos, state.visibilityFilter)
})

// map dispatch to props

const mapDispatchToProps = {
  toggleTodo,
  removeTodo
}

const VisibleTodoList = connect(
  mapStateToProps,
  mapDispatchToProps
)(TodoList)

export default VisibleTodoList