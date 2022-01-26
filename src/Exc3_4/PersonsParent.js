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
    debugger
    let items = this.state.persons.map((item,index)=> 
    <React.Fragment key={index}>
    <PersonsChildComp name={item.Name}/>
    <br/>
    <TasksChildComp  title={item.Name.Title} completed={item.Name.Completed}/>
    </React.Fragment>
    )
    return (
      <div>
        <h3>Persons List:</h3>
        <h3>{items}</h3>
      </div>
    );
  }
}

export default PersonsParentComp;
