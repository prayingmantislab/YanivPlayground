import React from 'react';
import { Component } from 'react';
import Demo3_GrandChildComp from './demo3_GrandChild';

class Demo_3ChildComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return(
      <div>
      <h3>Child Components</h3>
      <Demo3_GrandChildComp/>
      </div>
    )
  }
}

export default Demo_3ChildComp;
