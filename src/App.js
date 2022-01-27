import React from 'react';
import { Component } from 'react';
// import Demo4_DynamicRenderComp from './Demo4_DynamicRender';
// import Promise3 from './Promise3';
import Demo3_ParentComp from '../src/demo3_contextAPI/demo3_Parent';
// import './App.css';
// import PersonsParentComp from '../src/Exc3_4/PersonsParent';

class App extends Component {
  render() {
    return (
      <div>
        <Demo3_ParentComp/>
      </div>
    );
  }
}

export default App;
