import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div id={styles.headerContainer}>
      <div id={styles.logo}>
        <h1>Lorem ipsum.</h1>
      </div>
    </div>
  )
}

export default Header