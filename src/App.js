import React from 'react';
import {
  BrowserRouter as Router,
  Route,
} from "react-router-dom"

import Home from './pages/Home'
import Snake from './pages/Snake'
import WhatcomStables from './pages/WhatcomStables'
import Header from './components/Header'
import './css/App.css'

function App() {
  return (
    <Router>
      <Header/>
      <Route exact path='/'>
        <Home />
      </Route>
      <Route path='/Snake'>
        <Snake />
      </Route>
      <Route path='/WhatcomStables'>
        <WhatcomStables />
      </Route>
    </Router>
  )
}

export default App;
