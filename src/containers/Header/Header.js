import React, { Component } from "react"
import styles from './Header.css';

class Header extends Component {
  render() {
    return (
      <div className={styles.container}>
        <h1 className={styles.heading}>Redux Todo</h1>
      </div>
    );
  }
}

export default Header;