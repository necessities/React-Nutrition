import React, { Component } from 'react'
import Tracker from './components/tracker'
import ColorTracker from './components/colortracker'
import './App.css'
import CurrentRoll from './components/CurrentRoll'
import NumbersRolled from './components/NumbersRolled'




class App extends Component{
  constructor(props) {
    super(props)
    this.state = {
      numbersRolled: [],
      currentRoll: 0
    }
  }

  rolledDice = () => {
    let roll = Math.floor(Math.random() * (1, 6) + 1)
    this.state.numbersRolled.push(roll)
    this.setState({ currentRoll: roll})
  }


  render(){
    return(
      <>
      <CurrentRoll name={this.state.currentRoll}/>
      <NumbersRolled rolled={this.state.numbersRolled} dice={this.rolledDice}/>
      {/* <button onClick={this.rolledDice}>dice roll</button> */}
      {/* <h1> Numbers rolled</h1> */}
      {/* <h1>{this.state.numbersRolled}</h1> */}
      {/* <h1>Dice</h1> */}
      {/* <div className = "square" > */}
      {/* <h2 >{this.state.currentRoll}</h2> */}




        <h1>A Basic Class Component</h1>
        <ColorTracker></ColorTracker>
        <Tracker></Tracker>
      </>
    )
  }
}

export default App