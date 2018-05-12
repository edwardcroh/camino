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
        <div>orders and completed orders</div>
      </div>
    );
  }
}

export default Progress;
