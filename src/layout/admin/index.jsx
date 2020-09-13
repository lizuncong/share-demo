import React, { memo } from 'react';
import NavLeft from './navLeft';

const Index = memo(({ children }) => {
  return (
      <div style={{ height: '100%', display: 'flex', background: 'red'}}>
        <NavLeft />
        <div style={{ flex: '1', padding: '12px', background: 'green' }}>
          {children}
        </div>
      </div>
  )
})

export default Index;
