import React from 'react';
import { Component } from 'react';
import DynamicRenderChildComp from './DynamicRenderChild'
// import './App.css';


class DynamicRenderParentComp extends Component {
  constructor() {
    super();
    this.state = {items:[1,2,3]}
  }
  render() {

       let children = this.state.items.map((item,index)=>
       {
          return <DynamicRenderChildComp num={item} key={index}/>
       })
    return (
      <div>
        <h3>Parent Comp</h3>
        {children}
        <h3>Parent Comp footer</h3>
      </div>
    );
  }
}

export default DynamicRenderParentComp;
