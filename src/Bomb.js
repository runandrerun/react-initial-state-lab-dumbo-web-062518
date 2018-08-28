// your Bomb code here!
import React, { Component } from 'react';

export default class Bomb extends Component {
  constructor(props) {
    super(props)

    this.state = {
      secondsLeft: this.props.initialCount
    }
  };

  // timer = () => {
  //   // console.log(this.state.secondsLeft)
  //   if (this.state.secondsLeft === 0) {
  //     return <div>Boom!</div>
  //   } else {
  //     return <div>`${this.state.secondsLeft} seconds left before I go boom!`</div>
  //   }
  // }

  render() {
    return(
      <div>
        {this.state.secondsLeft === 0 ? "Boom!" : `${this.state.secondsLeft} seconds left before I go boom!`}
      </div>
    )
  };
}
