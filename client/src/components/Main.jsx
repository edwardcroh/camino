import React, { Component } from 'react';
import Progress from './Progress.jsx';
import Data from './Data.jsx';
import Sales from './Sales.jsx';

class Main extends Component {
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
