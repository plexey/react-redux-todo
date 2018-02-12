import React from 'react'
import { connect } from 'react-redux'
import { addTodo } from '../actions'
import Button from '../components/Button/Button';
import Input from '../components/Input/Input';
import styles from './AddTodo.css'

let AddTodo = ({ dispatch }) => {
  let input
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
        misc={node => {
          input = node
        }}
      />

      <Button type="submit" text="Add Todo" fontAwesomeIcon={'plus'} />
    </form>
  )
}
AddTodo = connect()(AddTodo)

export default AddTodo