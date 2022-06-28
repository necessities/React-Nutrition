import React, { Component } from 'react'
import Tracker from './components/tracker'
import ColorTracker from './components/colortracker'
import './App.css'


class App extends Component{
  render(){
    return(
      <>
        <h1>A Basic Class Component</h1>
        <ColorTracker></ColorTracker>
        <Tracker></Tracker>
      </>
    )
  }
}

export default App