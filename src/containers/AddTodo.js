import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Input from '../components/Input/Input';
import styles from './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input;
  return (
    <form
      className={styles.main}
      onSubmit={e => {
        e.preventDefault()
        if (!input.value.trim()) {
          return
        }
        dispatch(addTodo(input.value))
        input.value = ''
      }}
    >
      <Input
        placeholderText="What to do?"
        misc={node => {
          input = node
        }}
      />
    </form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo