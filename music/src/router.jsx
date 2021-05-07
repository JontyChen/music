import React from 'react'
import { Redirect, Route, Switch} from 'react-router-dom'
import Index from 'view/index/index'
import Hot from 'component/Hot/Hot'
 const Routes = ()=>(
     <Switch>
         <Route exect path="/index" component={Index}></Route>
         <Route exect path="hot" component={Hot}></Route>
         <Redirect from='/' to='/Index'></Redirect>
     </Switch>
 )
 export default Routes