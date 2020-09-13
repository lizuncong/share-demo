import React, { memo } from 'react';
import { NavLink } from 'react-router-dom';

const Index = memo(() => {
  return (
      <div style={{ width: '200px', background: '#001529' }}>
        <div><NavLink to="/home">首页</NavLink></div>
        <div><NavLink to="/product/list">商品列表</NavLink></div>
        <div><NavLink to="/redirect">测试重定向</NavLink></div>
      </div>
  )
})

export default Index;
