import React from 'react'
import styles from './Header.module.css'

const Header = () => {
  return (
    <div id={styles.headerContainer}>
      <div id={styles.logo}>
        <img src="/images/placeholderLogo.png" alt="" />
      </div>
    </div>
  )
}

export default Header