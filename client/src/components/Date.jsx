import React, { Component } from 'react';
import Progress from './Progress.jsx';

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>TODAY WEEK MONTH</h2>
        <Progress />
      </div>
    );
  }
}

export default Date;
