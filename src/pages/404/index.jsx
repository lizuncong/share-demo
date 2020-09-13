import React, { memo, useEffect } from 'react'

const Index = memo((props) => {
  if(props.staticContext){
    props.staticContext.is404 = true
  }
  return (
      <div>
        404，访问的页面不存在
      </div>
  )
})

export default Index;
