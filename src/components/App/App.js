import React, { Component } from "react"
import Header from '../Header/Header'
import Footer from '../Footer/Footer'
import AddTodo from '../../containers/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import styles from './App.css';

class App extends Component {
  render() {
    return (
      <div className={styles.container}>
        <Header />
        <AddTodo />
        <Footer />
        <VisibleTodoList />
      </div>
    );
  }
}

export default App;

