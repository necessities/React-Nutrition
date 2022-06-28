import React, { Component } from "react";

class ColorTracker extends Component {
    constructor(props) {
        super(props)

        this.state = {
            color: 0,
            possibleColors: ["lightblue", "red", "green", "purple", "yellow"]
        }
    }

    changeColor = () => {
        this.setState({color: this.state.color + 1})
    }

    render(){
        console.log(this.state.possibleColors[this.state.color])
        return(
            <>
            
            <div onClick={this.changeColor} class="square" style={ {backgroundColor: this.state.possibleColors[this.state.color]} }> <p> color: {this.state.possibleColors[this.state.color]} </p></div>
            <p>color: {this.state.possibleColors[this.state.color]}</p>
            
            </>
        )
    }
}

export default ColorTracker