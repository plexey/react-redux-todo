import React, { Component } from "react"
// import classnames from 'classnames';
import styles from './Button.css';
import FontAwesome from 'react-fontawesome';

class Button extends Component {
  render() {
    const { action, text, type, fontAwesomeIcon } = this.props;
    const buttonText = text ? <p className={styles.text}>{text}</p> : '';
    return (
      <button type={type} className={styles.main} onClick={action}>
        {buttonText}
        <FontAwesome
          inverse={true}
          className={styles.icon}
          name={fontAwesomeIcon} />
      </button>
    );
  }
}

export default Button;

