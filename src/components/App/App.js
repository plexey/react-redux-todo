import React, { Component } from "react"
import Header from '../Header/Header'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import styles from './App.css';
import TodoStats from "../../containers/TodoStats";

class App extends Component {
  render() {
    return (
      <div className={styles.outer}>
        <Header />
        <div className={styles.container}>
          <AddTodo />
          <TodoStats />
          <VisibleTodoList />
        </div>
      </div>

    );
  }
}

export default App;

