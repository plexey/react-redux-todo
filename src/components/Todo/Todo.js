import React, { Component } from "react"
import PropTypes from 'prop-types'
import styles from './Todo.css';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';

class Todo extends Component {
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <div className={classNames({
        [styles.main]: true,
        [styles.completed]: completed
      })}>
        <FontAwesome className={styles.checkbox} onClick={onClick} name={completed ? 'check-square': 'square'} />
        <li
          className={classNames({
            [styles.text]: true
          })}
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </li>
      </div>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

export default Todo;
