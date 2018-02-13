import React, { Component } from "react"
import styles from './Input.css';

class Input extends Component {
  render() {
    const { placeholderText, misc } = this.props;
    return (
      <input placeholder={placeholderText} className={styles.main} ref={misc}/>
    );
  }
}

export default Input;

