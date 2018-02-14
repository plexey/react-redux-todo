import React, { Component } from "react"
import Header from '../Header/Header'
import AddTodo from '../../containers/AddTodo/AddTodo'
import VisibleTodoList from '../../containers/VisibleTodoList'
import styles from './App.css';
import ListHeader from '../../containers/ListHeader/ListHeader';
import ListContainer from '../../containers/ListContainer/ListContainer';

class App extends Component {
  render() {
    return (
      <div className={styles.outer}>
        <Header />
        <div className={styles.container}>
          <ListContainer>
            <AddTodo />
            <ListHeader />
            <VisibleTodoList />
          </ListContainer>
        </div>
      </div>

    );
  }
}

export default App;

