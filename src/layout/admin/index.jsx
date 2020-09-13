import React, { memo } from 'react';
import NavLeft from './navLeft';
import styles from './index.module.less';

const Index = memo(({ children }) => {
  return (
      <div className={styles.container}>
        <NavLeft />
        <div className={styles.content}>
          {children}
        </div>
      </div>
  )
})

export default Index;
