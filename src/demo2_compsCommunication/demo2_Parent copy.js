import React from 'react';
import { Component } from 'react';
import Demo2ChildCompCopy from './demo2_Child'
// import './App.css';

class Demo2ParentCompCopy extends Component {
  constructor() {
    super();
    this.state={data:''}
}

getDataFromChild = (dataFromChild) => {
this.setState({data: dataFromChild})
}
render() {

    
    return (
      <div>
         <h3>Parent Comp</h3>
            Data from Child: {this.state.data} <br/>
            <Demo2ChildCompCopy callback={data=>this.getDataFromChild(data)}/>
          <h3>Parent Comp footer</h3>     
      </div>
    );
  }
}
export default Demo2ParentCompCopy;
