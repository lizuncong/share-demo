import React, { memo } from 'react'
import { StaticRouter } from 'react-router-dom'
import Routes from './routes.jsx'

const Index = memo(({ location, context }) => {
  return (
      <StaticRouter location={location} context={context}>
        <Routes />
      </StaticRouter>
  )
})

export default Index
