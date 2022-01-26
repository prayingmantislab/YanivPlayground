import React from 'react';
import { Component } from 'react';
import './App.css';

interface IProps {
  name: string;
  age: string;
}

interface IState {
  rendered: boolean;
}

class Demo2_Inputs extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { rendered: false };
  }
  sayHello = () => {
    alert('I love you Asi hang in there');
  };
  getName = (e) => {
    console.log(e.target.value);
  };
  getAdult = (e) => {
    console.log(e.target.checked);
  };
  render() {
    return (
      <div>
        Name:<input type='text' onChange={this.getName}></input>
        <br />
        Adult ?<input type='checkbox' onChange={this.getAdult}></input>
      </div>
    );
  }
}

export default Demo2_Inputs;
