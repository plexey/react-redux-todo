import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.css';
import classNames from 'classnames';

const Link = ({ active, children, onClick }) => {
  return (
    <a
      className={classNames({
        [styles.main]: true,
        [styles.active]: active
      })}
      href=""
      onClick={e => {
        e.preventDefault()
        onClick()
      }}
    >
      {children}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link