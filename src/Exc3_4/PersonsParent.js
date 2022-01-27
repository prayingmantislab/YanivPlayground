import React from 'react';
import { Component } from 'react';
import PersonsChildComp from './PersonsChild';
import TasksChildComp from './TasksChild';

class PersonsParentComp extends Component {
  constructor() {
    super();
    this.state = {

      persons:[{Name:'Avi',Tasks:[{Title:'Task A',Completed:true},{Title:'Task B',Completed:false}]},{Name:'Dana',Tasks:[{Title:'Task C',Completed:false},{Title:'Task D',Completed:true}]}]
    }
  }
  render() {
    let items = this.state.persons.map((item,index)=> 
    <React.Fragment key={index}>
    <PersonsChildComp key = {item.name} name={item.Name}/>
    </React.Fragment>
    )
    let items2 = this.state.persons[0].Tasks.map((item,index)=> 
    <React.Fragment key={index}>
    <TasksChildComp key = {item.Title} title={item.Title} completed={item.completed}/>
    </React.Fragment>
    )
    return (
      <div>
        <h3>Persons List:</h3>
        <h3>{items}</h3>
        <h3>{items2}</h3>
      </div>
    );
  }
}

export default PersonsParentComp;
