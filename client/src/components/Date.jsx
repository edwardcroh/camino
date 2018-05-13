import React, { Component } from 'react';
import Progress from './Progress.jsx';
import Data from './Data.jsx';
import Sales from './Sales.jsx';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value
    });
  }

  render() {
    return (
      <div>
        <Tabs
          className="tabs"
          onChange={this.handleChange}
          value={this.state.slideIndex}
        >
          <Tab label="Today" value={0} />
          <Tab label="Week" value={1} />
          <Tab label="Month" value={2} />
        </Tabs>
        <SwipeableViews
          index={this.state.slideIndex}
          onChangeIndex={this.handleChange}
        >
          <div>
            <Progress />
            <Data />
            <Sales />
          </div>
          <div>
            <Progress />
            <Data />
            <Sales />
          </div>
          <div>
            <Progress />
            <Data />
            <Sales />
          </div>
        </SwipeableViews>
      </div>
    );
  }
}

export default Date;
