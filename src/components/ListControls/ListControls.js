import React from "react"
import FilterLink from '../../containers/FilterLink'
import styles from './ListControls.css';

const ListControls = ({ activeTodos, completedTodos }) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>{activeTodos} items left</h2>
      <FilterLink filter="SHOW_ALL">
        All
      </FilterLink>
      <FilterLink filter="SHOW_ACTIVE">
        Active
      </FilterLink>
      <FilterLink filter="SHOW_COMPLETED">
        Completed
      </FilterLink>
      <h2 className={styles.heading}>{completedTodos} completed</h2>
    </div>
  )
}

export default ListControls