import React from 'react';
import { Component } from 'react';
import PersonComp from './Person'
import TasksComp from './Tasks'
// import './App.css';


class ListComp extends Component {
  constructor() {
    super();
    this.state = {users:[{name:'Avi'},{name:'Dana'}],tasks:[{Title:'Task A',completed:true},{Title:'Task B',completed:false},{Title:'Task c',completed:false},{Title:'Task D',completed:true}]}
  }
  render() {

  let children = this.state.users.map((index,item)=>{
    return <PersonComp key={index} name={item.name}/>
  })
    return (
      <div>
        {children}
      </div>
    );
  }
}

export default ListComp;
