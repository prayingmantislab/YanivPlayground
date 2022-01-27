import React from 'react';
import { Component } from 'react';
import Demo3_ChildComp from './demo3_Child';
import MyContext from './MyappContext';

class Demo3_ParentComp extends Component {
  constructor() {
    super()
    this.state = {data:"Hello from parent"};
  }

  render() {
     
    return(
      <MyContext.Provider value={{appdata:this.state.data}}>
        <div>
        <h3>Demo3_ParentComp</h3>
        <Demo3_ChildComp/>
        </div>
      </MyContext.Provider>
    )
  }
}

export default Demo3_ParentComp;
