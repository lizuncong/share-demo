import React, { useState } from 'react';

const Index = () => {
  console.log('counter')
  const [count, setCount] = useState(0)
  return (
      <div>
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
}


export default Index
