import React from 'react'
import { Route } from 'react-router'
import Login from './components/Login'
import Travel from './components/Travel'
import User from './components/User'
import './custom.css'


const App = () => {
  return (
    <div>
      <Route exact path="/" component={Login} />
      <Route path="/Travel" component={Travel} />
      <Route path="/User" component={User} />
    </div>
  )
}

export default App