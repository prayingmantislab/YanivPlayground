import React from 'react';
import { Component } from 'react';
import MyContext from './MyappContext';
class Demo3_GrandChildComp extends Component {
  constructor() {
    super();
  }
  render() {
    
    return (
      <MyContext.Consumer>
        {
          context => (
          <div>
            data:{context.appdata}
          </div>
        )
        }
      </MyContext.Consumer>
    );
  }
}

export default Demo3_GrandChildComp;
