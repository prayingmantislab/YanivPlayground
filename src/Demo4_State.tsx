import React from 'react';
import { Component } from 'react';
import './App.css';

interface IProps {
  any;
}

interface IState {
  number: number;
  total: number;
}

class Demo4_State extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { number: 0, total: 0 };
  }

  //input that enter numbers
  //a span that hold the total number of
  // a button that will add the number to total
  getNumber = (e) => {
    this.setState({ number: parseInt(e.target.value) });
  };

  addNumber = () => {
    this.setState({ total: this.state.number + this.state.total });
  };

  render() {
    return (
      <div>
        <br />
        number: <input type='number' onChange={this.getNumber} />
        <input type='button' onClick={this.addNumber} value='addNumber' />
        <br />
        total:<span>{this.state.total}</span>
      </div>
    );
  }
}

export default Demo4_State;
