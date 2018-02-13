import React, { Component } from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './Todo.css';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import { removeTodo } from '../../modules/todo';

class Todo extends Component {
  constructor(props) {
    super(props);
    this.state = {
      active: false
    }
  }

  toggleActive = val => {
    this.setState({
      active: val
    })
  }
  render() {
    const { active } = this.state;
    const { dispatch, id, onClick, completed, text } = this.props;
    return (
      <div
        onMouseEnter={() => this.toggleActive(true)}
        onMouseLeave={() => this.toggleActive(false)}
        className={classNames({
          [styles.main]: true,
          [styles.completed]: completed
        })}>
        <FontAwesome className={styles.checkbox} onClick={onClick} name={completed ? 'check-square' : 'square'} />
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
        <FontAwesome
          className={classNames({
            [styles.delete]: true,
            [styles.deleteVisible]: active
          })}
          name={'times'}
          onClick={() => dispatch(removeTodo(id))} />
      </div>
    );
  }
}

Todo.propTypes = {
  onClick: PropTypes.func.isRequired,
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

Todo = connect()(Todo)

export default Todo;
