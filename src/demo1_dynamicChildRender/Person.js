import React from 'react';
import { Component } from 'react';
// import './App.css';
// import './Ex3_Dynamic.css';

class PersonComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
     
    };
  }

  render() {
     
    return(
      <div>
      <h3>{this.props.name}</h3>
      <h3>Tasks:</h3>
      </div>
    )
  }
}

export default PersonComp;
