import React, { Component } from "react"
// import classnames from 'classnames';
import styles from './Input.css';

class Input extends Component {
  render() {
    const { misc } = this.props;
    return (
      <input className={styles.main} ref={misc}/>
    );
  }
}

export default Input;

