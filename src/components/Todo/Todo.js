import React, { Component } from "react"
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import styles from './Todo.css';
import classNames from 'classnames';
import FontAwesome from 'react-fontawesome';
import { removeTodo } from '../../modules/todo';

const TodoText = ({ text, completed }) => (
  <p
    className={classNames({
      [styles.text]: true
    })}>
    {text}
  </p>
)

const TodoControl = ({ iconClasses, icon, action }) => (
  <div className={styles.control} onClick={action}>
    <FontAwesome
      className={iconClasses}
      name={icon}
    />
  </div>
)

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
    const { toggleTodo, removeTodo, completed, text } = this.props;
    const checkClasses = classNames({
      [styles.check]: true,
      [styles.checkCompleted]: completed
    })
    const crossClasses = classNames({
      [styles.cross]: true,
      [styles.crossVisible]: active
    })
    return (
      <li
        onMouseEnter={() => this.toggleActive(true)}
        onMouseLeave={() => this.toggleActive(false)}
        className={classNames({
          [styles.main]: true,
          [styles.mainCompleted]: completed
        })}>
        <TodoControl
          iconClasses={checkClasses}
          icon={completed ? 'check-square' : 'square'}
          action={toggleTodo} />
        <TodoText text={text} completed={completed} />
        <TodoControl
          iconClasses={crossClasses}
          icon={'times'}
          action={removeTodo} />
      </li>
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
