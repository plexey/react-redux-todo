import React, { Component } from "react"
import styles from './Footer.css';

class Footer extends Component {
  render() {
    return (
      <div className={styles.main}>
        <h2 className={styles.text}>
          <a className={styles.link} href="https://github.com/plexey/react-redux-todo">View code on Github <i className="fab fa-github"></i></a>
        </h2>
        <h2 className={styles.text}>
          Created by <a className={styles.link} href="https://github.com/plexey">Tom Trinca</a>
        </h2>
      </div>
    );
  }
}

export default Footer;

