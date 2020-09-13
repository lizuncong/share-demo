import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';
import styles from './index.module.less';

const Index = memo(() => {
  return (
      <div className={styles.navLeft}>
        <div className={styles.menuItem}><NavLink to="/home">首页</NavLink></div>
        <div className={styles.menuItem}><NavLink to="/product/list">商品列表</NavLink></div>
        <div className={styles.menuItem}><NavLink to="/redirect">测试重定向</NavLink></div>
      </div>
  )
})

export default Index;
