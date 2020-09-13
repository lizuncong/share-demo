import React, { memo, useState } from 'react';
import styles from './index.module.less';

const Index = memo((props) => {
  console.log('home..props', props)
  console.log('home..staticContext', props.staticContext)
  const [count, setCount] = useState(0)
  // 可以设置staticContext的
  if(props.staticContext){
    // 只有服务端的StaticRouter才有staticContext属性，客户端是没有的，因此需要判断一下
    props.staticContext.testPageName = 'home'
  }
  return (
      <div className={styles.home}>
        <div>
          这是首页
        </div>
        计数器{count}
        <div
            onClick={() => {
              setCount(count + 1)
            }}
        >
          click me
        </div>
        <div>
          test
        </div>
      </div>
  )
})


export default Index
