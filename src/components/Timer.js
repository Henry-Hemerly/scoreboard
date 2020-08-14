import React, { Component } from 'react';

class Timer extends Component {

  state = {
    isRunning: false,
    elapsedTime: 0,
    previousTime: 0,
  }

  componentDidMount = () => {
    this.intervalID = setInterval(() => { 
      return this.tick(), 100
    });
  }

  tick = () => {
    if (this.state.isRunning) {
      const now = Date.now();
      this.setState( prevState => {
        return (
          {
            previousTime: now,
            elapsedTime: prevState.elapsedTime + (now - this.state.previousTime),
          }
        )
      });
    }
  }

  handleTimer = () => {
    this.setState( prevState => ({
        isRunning: !prevState.isRunning
      }
    ));
    if (!this.state.isRunning) {
      this.setState({
        previousTime: Date.now()
      });
    }
  }

  handleReset = () => {
    this.setState( () => {
      return ({
        elapsedTime: 0
      })
    });
  }

  // To avoid memory leaks
  componentWillUnmount = () => {
    clearInterval(this.intervalID);
    console.log('Interval successfully unmounted.');
  }

  render() {
    return (
      <div className="stopwatch">
        <h2>Timer</h2>
        <span className="stopwatch-time">{Math.floor(this.state.elapsedTime / 1000)}</span>
        <button onClick={this.handleTimer}>{this.state.isRunning ? 'Stop' : 'Start'}</button>
        <button onClick={this.handleReset}>Reset</button>
      </div>
      
    );
  }
}

export default Timer;