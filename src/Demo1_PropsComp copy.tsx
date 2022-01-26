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

class Demo1_propsComp extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { rendered: false };
  }
  sayHello = () => {
    alert('I love you Asi hang in there');
  };
  render() {
    return (
      <div>
        <h1 style={{ color: 'grey', backgroundColor: 'red' }}>Hello world</h1>
        <input type='button' value='click me' onClick={this.sayHello} />
        <h1>
          Name: {this.props.name} <br />
          Age: {this.props.age}
        </h1>
      </div>
    );
  }
}

export default Demo1_propsComp;
