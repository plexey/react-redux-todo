import React, { Component } from "react"
import PropTypes from 'prop-types'
import styles from './Todo.css';
import Button from '../Button/Button';
import classNames from 'classnames';

class Todo extends Component {
  render() {
    const { onClick, completed, text } = this.props;
    return (
      <div className={styles.main}>
        <li
          className={classNames({
            [styles.text]: true,
            [styles.completed]: completed
          })}
          onClick={onClick}
          style={{
            textDecoration: completed ? 'line-through' : 'none'
          }}
        >
          {text}
        </li>
        <Button
          action={onClick}
          fontAwesomeIcon={completed ? 'check-square' : 'square'} />
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
