
import React from 'react'
import {BrowserRouter as Router,Switch,Route,Redirect} from 'react-router-dom'


import Index from './view/index/index'
import Hot from './component/Hot/Hot'

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/index' component={Index}></Route>
        <Route path='/hot' component={Hot}></Route>
        <Redirect from='/' to='/Index'></Redirect>
      </Switch>
    </Router>
  );
}
export default App;