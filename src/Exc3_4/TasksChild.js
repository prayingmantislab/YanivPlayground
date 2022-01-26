import React from 'react';
import { Component } from 'react';

class TasksChildComp extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
     
    return(
    <div>
        <h3>Title:</h3>
        {this.props.title}
        <h3>Completed:</h3>
        {this.props.completed}

      </div>
    )
  }
}

export default TasksChildComp;
