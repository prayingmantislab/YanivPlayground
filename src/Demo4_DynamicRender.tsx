import React from 'react';
import { Component } from 'react';
import './Demo4_DynamicRender.css';

interface IProps {
  any;
}

interface IState {
  isRed: boolean;
  isVisible: boolean;
  isExist: boolean;
  colors: Array<string>;
  family: Array<Object>;
}

class Demo4_DynamicRenderComp extends Component<IProps, IState> {
  constructor(props: IProps) {
    super(props);
    this.state = {
      isRed: false,
      isVisible: false,
      isExist: false,
      colors: ['red', 'green', 'blue'],
      family: [
        { name: 'asi', age: '45' },
        { name: 'merav', age: '50' },
        { name: 'itamar', age: '13' },
        { name: 'michael', age: '10' },
      ],
    };
  }
  changeColor = () => {
    this.setState({ isRed: !this.state.isRed });
  };
  changeVisibilty = () => {
    this.setState({ isVisible: !this.state.isVisible });
  };
  createDestroy = () => {
    this.setState({ isExist: !this.state.isExist });
  };
  addColor = () => {
    let arr = this.state.colors;
    arr.push('yellow');
    this.setState({ colors: arr });
  };
  addMember = () => {
    let arr = this.state.family;
    arr.push({name:'liran',age:'39'});
    this.setState({ family: arr });
  };


  render() {
    let styleName;
    if (this.state.isRed) {
      styleName = 'RedStyle';
    } else {
      styleName = 'BlueStyle';
    }
    let styleVisiblity;
    if (this.state.isVisible) {
      styleVisiblity = 'visible';
    } else {
      styleVisiblity = '';
    }

    let obj;
    if (this.state.isExist) {
      obj = <div>created div</div>;
    }

    let items = this.state.colors.map((item) => (
      <ul>
        <li>{item}</li>
      </ul>
    ));
    let familyMemebers = this.state.family.map((member, index) => (
      <li key={index}>
        {member.name}, {member.age}
      </li>
    ));
    return (
      <div>
        {items}
        <input type='button' value='add color' onClick={this.addColor}></input>
        <br />
        <ol>{familyMemebers}</ol>
        <input type="button" value='add member' onClick={this.addMember}></>
      </div>
    );
  }
}

export default Demo4_DynamicRenderComp;
