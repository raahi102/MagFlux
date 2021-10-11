import React from 'react';

import styles from './App.module.scss';
import LattuRouter from './routes';

function App() {
  return (
    <div className={styles.app}>
      <LattuRouter />
    </div>
  );
}

export default App;
