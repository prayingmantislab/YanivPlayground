import React from 'react';
import { Component } from 'react';


class Promise_ex extends Component {
  constructor(props) {
    super(props);
    this.state = { };
  }

  // changeBackground = (e) => {
  //   if (e.target.value.length < 5) {
  //     this.setState({ backgroundColor: 'BlueStyle' });
  //   } else {
  //     this.setState({ backgroundColor: 'RedStyle' });
  //   }
  // };

  GetMul(num) {
    return new Promise((resolve) => {
      setTimeout(() => resolve(num * 2), 2000);
    });
  }
  };
  render() {
    this.GetMul(5).then((data) => console.log(data))};
    {console.log('End')}
    return (
      <div>
        
   )

export default Ex3_Dynamic;
