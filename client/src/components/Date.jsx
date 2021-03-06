import React, { Component } from 'react';
import Main from './Main.jsx';
import { Tabs, Tab } from 'material-ui/Tabs';
import { connect } from 'react-redux';
import { DATES, setFilteredOrders } from '../redux/actions';

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
            onActive={() => this.props.setFilteredOrders(DATES.TODAY)}
          >
            <Main sales={this.props} />
          </Tab>
          <Tab
            label="Week"
            value={1}
            style={this.getStyle(this.state.slideIndex === 1)}
            onActive={() => this.props.setFilteredOrders(DATES.WEEK)}
          >
            <Main sales={this.props} />
          </Tab>
          <Tab
            label="Month"
            value={2}
            style={this.getStyle(this.state.slideIndex === 2)}
            onActive={() => this.props.setFilteredOrders(DATES.MONTH)}
          >
            <Main sales={this.props} />
          </Tab>
        </Tabs>
      </div>
    );
  }
}

const mapStateToProps = state => {
  return state;
};

export default connect(mapStateToProps, { setFilteredOrders })(Date);
