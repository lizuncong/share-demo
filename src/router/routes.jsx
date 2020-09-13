import React, { memo } from 'react'
import { Redirect, Switch, Route } from 'react-router-dom'
import loadable from '@loadable/component'

const AdminLayout = loadable(() => import(/* webpackChunkName: 'adminLayout' */'../layout/admin/index'));
const Home = loadable(() => import(/* webpackChunkName: 'home' */'../pages/home/index'));
const ProductList = loadable(() => import(/* webpackChunkName: 'productList' */'../pages/product-list/index'));
const NotFound = loadable(() => import(/* webpackChunkName: 'notFound' */'../pages/404/index'));
const Login = loadable(() => import(/* webpackChunkName: 'login' */'../pages/login/index'));


/**
 * 当路由不匹配时，实现404页面有两种方法：
 * 1.直接通过<Route component={NotFound} />实现，并设置res.status = 404
 * 2.通过<Redirect to="/login" />重定向，并设置res.status = 301
 * 因此这里需要演示这两种方案。
 * */
const Index = memo(() => {
  return (
      <AdminLayout>
        <Switch>
          <Route path="/home" component={Home} />
          <Route path="/product/list" component={ProductList} />
          <Route path="/login" component={Login} />
          {/*<Route component={NotFound} />*/}
          <Redirect to="/login" />
        </Switch>
      </AdminLayout>
  )
})

export default Index
