import React from 'react';
import { Component } from 'react';
import './App.css';
import './Ex3_Dynamic.css';

class Ex3_3Dynamic extends Component {
  constructor(props) {
    super(props);
    this.state = {
      headers: ['Name', 'Age', 'City'],
      persons: [
        { name: 'Dana', age: 20, city: 'Haifa' },
        { name: 'Ron', age: 22, city: 'Tel Aviv' },
        { name: 'Dov', age: 31, city: 'Ashdod' },
      ]
    };
  }

  render() {
     let items1 = this.state.headers.map((item, index)=>
     <th key={index}>{item}</th>
     )

     let items2 = this.state.persons.map((item, index)=>
    <tr key={index}>
     <td>{item.name}</td>
     <td>{item.age}</td>
     <td>{item.city}</td>
     </tr>
     )
    return(
      <div>
        <table  className='table'>
        <thead>
          {items1}
        </thead>
        <tbody>
        {items2}
        </tbody>
        </table>
      </div>
    )
  }
}

export default Ex3_3Dynamic;
