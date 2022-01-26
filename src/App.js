import React from 'react';
import { Component } from 'react';
// import Demo4_DynamicRenderComp from './Demo4_DynamicRender';
// import Promise3 from './Promise3';
import PersonsParentComp from './Exc3_4/PersonsParent'
import './App.css';


class App extends Component {
  render() {
    return (
      <div>
        <PersonsParentComp/>
      </div>
    );
  }
}

export default App;
