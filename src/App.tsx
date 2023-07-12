import React from 'react';
import styles from './App.module.css';
import Header from './Pages/Header';
import Content from './Pages/Content';
import Footer from './Pages/Footer';

function App() {
  return (
    <div className={styles.appContainer}>
      <Header />
      <Content />
      <Footer />
    </div>
  );
}

export default App;
