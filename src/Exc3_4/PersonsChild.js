import React from 'react';
import { Component } from 'react';
import TasksChildComp from './TasksChild'

class PersonsChildComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      {this.props.name}
      <h3>Tasks:</h3>
      <br/>
      </div>
    )
  }
}

export default PersonsChildComp;
