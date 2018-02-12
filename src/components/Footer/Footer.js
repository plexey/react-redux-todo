import React from 'react'
import FilterLink from '../../containers/FilterLink'
import styles from './Footer.css';

const Footer = () => (
  <div className={styles.main}>
    <h2 className={styles.heading}>Filter:</h2>
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
)

export default Footer