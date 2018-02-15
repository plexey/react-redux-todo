import React, { Component } from "react"
import { connect } from 'react-redux'
import { editTodo, toggleTodo, removeTodo } from '../../modules/todo';
import PropTypes from 'prop-types'
import styles from './Todo.css';
import classNames from 'classnames';

const TodoControl = ({ iconClasses, icon, action }) => (
  <div className={styles.control} onClick={action}>
    <i className={iconClasses}></i>
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

  handleChange = event => {
    const { id, editTodo } = this.props;
    editTodo({ id: id, text: event.target.value })
  }

  handleOnBlur = () => {
    const { id, text, removeTodo } = this.props;
    if (text.length === 0) {
      removeTodo(id)
    }
  }

  render() {
    const { active } = this.state;
    const { toggleTodo, removeTodo, id, completed, text } = this.props;
    const checkClasses = classNames({
      [styles.check]: true,
      "far fa-check-circle": completed === true,
      "far fa-circle": completed === false,

    })
    const crossClasses = classNames({
      "fas fa-times": true,
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
          icon={completed ? 'check-circle' : 'fas-circle'}
          action={() => toggleTodo(id)} />



        <div className={styles.text}>
          <input
            className={classNames({
              [styles.input]: true,
              [styles.inputCompleted]: completed
            })}
            onChange={this.handleChange}
            value={text}
            onBlur={this.handleOnBlur} />
        </div>


        <TodoControl
          iconClasses={crossClasses}
          icon={'times'}
          action={() => removeTodo(id)} />
      </li>
    );
  }
}

Todo.propTypes = {
  completed: PropTypes.bool.isRequired,
  text: PropTypes.string.isRequired
}

const mapStateToProps = state => ({
})

const mapDispatchToProps = {
  editTodo,
  toggleTodo,
  removeTodo
}

Todo = connect(mapStateToProps, mapDispatchToProps)(Todo)

export default Todo;
