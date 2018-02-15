import React from "react"
import Link from "../../components/Link/Link";
import FilterLink from '../FilterLink';
import styles from './ListHeader.css';
import { connect } from 'react-redux'
import { removeCompleted, removeAll } from '../../modules/todo';

const MobileLayout = ({ removeCompleted }) => (
  <div className={styles.mobileMain}>
    <FilterLink filter="SHOW_ALL">
      All
    </FilterLink>
    <FilterLink filter="SHOW_ACTIVE">
      Active
    </FilterLink>
    <FilterLink filter="SHOW_COMPLETED">
      Completed
    </FilterLink>
    <Link active={false} onClick={removeCompleted}>
      Clear Completed
    </Link>
  </div>
)

const DefaultLayout = ({ removeCompleted, activeTodosCount }) => {
  return (
    <div className={styles.main}>
      <h2 className={styles.heading}>{activeTodosCount} Active</h2>
      <div className={styles.filters}>
        <FilterLink filter="SHOW_ALL">
          All
      </FilterLink>
        <FilterLink filter="SHOW_ACTIVE">
          Active
      </FilterLink>
        <FilterLink filter="SHOW_COMPLETED">
          Completed
      </FilterLink>
      </div>
      <div>
        <Link active={false} onClick={removeCompleted}>
          Clear Completed
      </Link>
      </div>
    </div>
  )
}

let ListHeader = ({ removeCompleted, removeAll, activeTodosCount, completedTodosCount }) => {
  return (
    <React.Fragment>
      <MobileLayout removeCompleted={removeCompleted} />
      <DefaultLayout removeCompleted={removeCompleted} activeTodosCount={activeTodosCount} />
    </React.Fragment>
  )
}

const getActiveTodosCount = (todos) => {
  return todos.filter(t => t.completed === false).length
}

// map State to props
const mapStateToProps = state => ({
  activeTodosCount: getActiveTodosCount(state.todos)
})

// map Dispatch to props
const mapDispatchToProps = {
  removeCompleted,
  removeAll
}

ListHeader = connect(mapStateToProps, mapDispatchToProps)(ListHeader)

export default ListHeader