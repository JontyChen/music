/*
 * @Author: your name
 * @Date: 2021-05-07 10:15:41
 * @LastEditTime: 2021-05-07 11:33:07
 * @LastEditors: your name
 * @Description: In User Settings Edit
 * @FilePath: \music\music\src\App.js
 */

import React from 'react'
import {BrowserRouter as Router} from 'react-router-dom'
import Routes from './router'


function App() {
  return (
   <Router>
     <Routes />
   </Router>
  );
}
export default App;