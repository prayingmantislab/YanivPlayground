import React from 'react';
import { Component } from 'react';
import './App.css';

interface IProps {
  any;
}

interface IState {
  data1: string;
  data2: string;
}

class Exc2_3_Comp extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = { data1: 'aaa', data2: 'bbb' };
  }

  getData1 = (e) => {
    if (e.target.value.length > 4) {
      this.swapData();
    } else {
      this.setState({ data1: e.target.value });
    }
  };
  getData2 = (e) => {
    if (e.target.value.length > 4) {
      this.swapData();
    } else {
      this.setState({ data2: e.target.value });
    }
  };
  swapData = () => {
    let temp = this.state.data1;
    this.setState({ data1: this.state.data2, data2: temp });
  };

  //create 2 text boxes with
  //present the data inn spans the
  //add button onclick swap between the age and the name
  //if textbox bigger than 4 chars the text will be swapped
  render() {
    return (
      <div>
        <input type='text' onChange={this.getData1} />
        <br />
        value 1: {this.state.data1}
        <br />
        <input type='text' onChange={this.getData2} />
        <br />
        value 2: {this.state.data2}
        <br />
        <input type='button' value='swap' onClick={this.swapData} />
      </div>
    );
  }
}

export default Exc2_3_Comp;
