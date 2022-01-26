import React from 'react';
import { Component } from 'react';
import './App.css';

interface IProps {
  id: string;
}

interface IState {
  rendered: boolean;
}

class Childcomp extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { rendered: false };
  }
  render() {
    return (
      <div>
        <h1>Hello from Childcomp </h1>
      </div>
    );
  }
}

export default Childcomp;
