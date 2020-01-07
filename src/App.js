import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import Home from './pages/Home'
import Project from './pages/Project'
import Header from './components/Header'
import './css/App.css'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/project'>
        <Project/>
      </Route>
    </Router>
  )
}

export default App;
