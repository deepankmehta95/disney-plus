import React from 'react'
import './App.css'
import Header from './components/Header'
import Home from './components/Home'
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom'
import Detail from './components/Detail'
import Login from './components/Login'

function App() {
  return (
    <div className='App'>
      <Router>
        <Header />
        <Switch>
          <Route path='/login' component={Login} />
          <Route path='/detail' component={Detail} />
          <Route path='/' component={Home} />
        </Switch>
      </Router>
    </div>
  )
}

export default App
