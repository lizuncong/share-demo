import React, { memo } from 'react'
import { BrowserRouter } from 'react-router-dom'
import Routes from "./routes";

// const Index = memo(() => {
//   return (
//       <BrowserRouter>
//         <AdminLayout>
//           <Switch>
//             <Route path="/home" component={Home} />
//             <Redirect to="/home" />
//           </Switch>
//         </AdminLayout>
//       </BrowserRouter>
//   )
// })

const Index = memo(() => {
  return (
      <BrowserRouter>
        <Routes />
      </BrowserRouter>
  )
})

export default Index
