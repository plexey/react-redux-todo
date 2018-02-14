import React from 'react'
import PropTypes from 'prop-types'
import styles from './Link.css';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

const Link = ({ active, children, onClick, fontAwesomeIcon }) => {
  const icon = fontAwesomeIcon ? <FontAwesome
    inverse={true}
    className={styles.icon}
    name={fontAwesomeIcon} /> : '';
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
      {icon}
    </a>
  )
}

Link.propTypes = {
  active: PropTypes.bool.isRequired,
  children: PropTypes.node.isRequired,
  onClick: PropTypes.func.isRequired
}

export default Link