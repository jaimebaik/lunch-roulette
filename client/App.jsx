import React, { Component } from 'react';
// import { Switch, Route, Link } from 'react-router-dom';

import RouletteCreator from './components/RouletteCreator.jsx';
// import Roulette from './components/RouletteContainer.jsx';
// import RouletteWheel from './components/RouletteWheel.jsx;'

import './scss/styles.css';

const App = props => {
  return (
    <div className='app'>

      <RouletteCreator />
    </div>
  )
}
export default App;    
      // <Switch>
      //   <Route
      //     exact
      //     path="/"
      //     component={RouletteCreator}
      //   />
      //   <Route
      //     path="/roulette"
      //     component={RouletteContainer}
      //   />
      // </Switch>