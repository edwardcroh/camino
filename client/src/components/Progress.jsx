import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      ordered: 28,
      total: 50
    };
  }

  render() {
    return (
      <div>
        <LinearProgress
          mode="determinate"
          value={this.state.ordered}
          max={this.state.total}
        />
        <div style={{ float: 'left' }}>
          <h3>Orders</h3>
          <h2>135</h2>
        </div>
        <div style={{ float: 'right' }}>
          <h3>Completed Orders</h3>
          <h2>124</h2>
        </div>
      </div>
    );
  }
}

export default Progress;
