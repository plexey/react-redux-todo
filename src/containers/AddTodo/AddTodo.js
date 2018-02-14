import React from 'react'
import { connect } from 'react-redux'
import { addTodo, toggleAllTodos } from '../../modules/todo';
import FontAwesome from 'react-fontawesome';
import Input from '../../components/Input/Input';
import styles from './AddTodo.css';
import classNames from 'classnames';

let AddTodo = ({ allCompleted, addTodo, toggleAllTodos }) => {
  let input;
  return (
    <form
      className={styles.main}
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        addTodo(input.value)
        input.value = ''
      }}
    >
      <button className={classNames({
        [styles.check]: true,
        [styles.checkActive]: allCompleted
      })} type="button" onClick={toggleAllTodos}><FontAwesome name="chevron-down" /></button>
      <Input
        placeholderText="What to do?"
        misc={node => {
          input = node
        }}
      />
    </form>
  )
}

function checkTodosCompletionStatus(todos) {
  return todos.length > 0 ? todos.every(todo => todo.completed === true) : false
}

// map State to props
const mapStateToProps = state => ({
  allCompleted: checkTodosCompletionStatus(state.todos)
})

// map Dispatch to props
const mapDispatchToProps = {
  addTodo,
  toggleAllTodos
}

AddTodo = connect(mapStateToProps, mapDispatchToProps)(AddTodo)

export default AddTodo