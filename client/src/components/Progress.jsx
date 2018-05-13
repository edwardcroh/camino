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
      <div style={{ padding: '20px 0px' }}>
        <LinearProgress
          mode="determinate"
          value={this.state.ordered}
          max={this.state.total}
          color="rgb(255, 132, 127)"
        />

        <table width="100%">
          <tr>
            <th style={{ float: 'left', paddingTop: '10px' }}>Orders</th>
            <th style={{ float: 'right', paddingTop: '10px' }}>
              Completed Orders
            </th>
          </tr>
          <tr>
            <td style={{ float: 'left' }} className="sales-total">
              135
            </td>
            <td style={{ float: 'right' }} className="sales-total">
              124
            </td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Progress;
