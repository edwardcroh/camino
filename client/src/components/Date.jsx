import React, { Component } from 'react';
import Progress from './Progress.jsx';
import Data from './Data.jsx';
import Sales from './Sales.jsx';
import { Tabs, Tab } from 'material-ui/Tabs';
import SwipeableViews from 'react-swipeable-views';

const tabStyle = {
  active_tab: {
    backgroundColor: 'rgb(255, 242, 210)',
    color: 'rgb(67, 37, 69)'
  },
  default_tab: {
    backgroundColor: 'transparent',
    color: 'white'
  }
};

class Date extends Component {
  constructor(props) {
    super(props);
    this.state = {
      slideIndex: 0
    };
    this.handleChange = this.handleChange.bind(this);
    this.getStyle = this.getStyle.bind(this);
  }

  handleChange(value) {
    this.setState({
      slideIndex: value
    });
  }

  getStyle(isActive) {
    return isActive ? tabStyle.active_tab : tabStyle.default_tab;
  }

  render() {
    return (
      <div>
        <Tabs
          onChange={this.handleChange}
          value={this.state.slideIndex}
          tabItemContainerStyle={{ backgroundColor: 'transparent' }}
          inkBarStyle={{
            background: 'none'
          }}
        >
          <Tab
            label="Today"
            value={0}
            style={this.getStyle(this.state.slideIndex === 0)}
          />
          <Tab
            label="Week"
            value={1}
            style={this.getStyle(this.state.slideIndex === 1)}
          />
          <Tab
            label="Month"
            value={2}
            style={this.getStyle(this.state.slideIndex === 2)}
          />
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
