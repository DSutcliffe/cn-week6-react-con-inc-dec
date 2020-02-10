import React from 'react';
import './css/App.css';

import { render } from '@testing-library/react';

class App extends React.Component {

  state = {
    counter: 0,
    message: ""
  }
  
  increment = () => {
    this.setState({
      message: this.state.message = "",
      counter: this.state.counter + 1
    })
  }
  
  decrement = () => {
    if (this.state.counter == 0) {
        this.setState({
          message: this.state.message = "Cannot Decrement below 0"
        })
    } else {
      this.setState({
        counter: this.state.counter - 1
      })
    }
    
  }

  render() {
    return (

      <div>
        <h1>{this.state.counter}</h1>
        <button onClick={this.increment}>Increment</button>
        <button onClick={this.decrement}>Decrement</button>
        <h3>{this.state.message}</h3>
      </div>
  
    );
  }
}

export default App;
