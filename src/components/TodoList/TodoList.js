import React from 'react';
import PropTypes from 'prop-types';
import FlipMove from 'react-flip-move';
import Todo from '../Todo/Todo';
import styles from './TodoList.css';

const TodoList = ({ todos, onTodoClick }) => (
  <FlipMove 
    appearAnimation="fade"
    enterAnimation="fade"
    leaveAnimation="fade"
    className={styles.main} 
    duration={200} 
    easing="ease-out" 
    typeName="ul">
    {todos.map(todo => (
      <Todo key={todo.id} {...todo} id={todo.id} onClick={() => onTodoClick(todo.id)} />
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

export default TodoList