import React from 'react';
import { Component } from 'react';
import './App.css';

interface IProps {
  any;
}

interface IState {
  name: string;
  age: string;
  city: string;
}

class Demo3_State extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { name: 'Asi', age: '45', city: '' };
  }
  changeData = () => {
    this.setState({ name: 'Ita', age: '13' });
  };

  changeCity = (e) => {
    this.setState({ city: e.target.value });
  };

  render() {
    return (
      <div>
        <input type='button' onClick={this.changeData} value='Change Data' />
        <br />
        Name:{this.state.name}
        <br />
        Age:{this.state.age}
        <br />
        {<input type='text' onChange={this.changeCity}></input>}
        <br />
        City : {this.state.city}
      </div>
    );
  }
}

export default Demo3_State;
