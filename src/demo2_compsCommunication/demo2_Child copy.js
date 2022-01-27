import React from 'react';
import { Component } from 'react';

class Demo2ChildComp extends Component {
  constructor(props) {
    super(props);
  }

  render() {
     
    return(
      <div>
      <h4>Child Component:</h4>
      <input type='button' value='send data to parent' onClick={()=>this.props.callback('feed me dady')}/>
      <h4>Child Comp footetr</h4>
      </div>
    )
  }
}

export default Demo2ChildComp;
