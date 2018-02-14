import React from "react"
import styles from './ListContainer.css';

const ListContainer = ({ children }) => {
  return (
    <div className={styles.main}>
      {children}
    </div>
  )
}

export default ListContainer