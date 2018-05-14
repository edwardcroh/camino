import React, { Component } from 'react';
import Progress from './Progress.jsx';
import Data from './Data.jsx';
import Sales from './Sales.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalOrders: this.props.info.length
    };
  }

  render() {
    return (
      <div>
        <Progress />
        <Data />
        <Sales />
      </div>
    );
  }
}

export default Main;
