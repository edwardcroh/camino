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
            <th style={{ float: 'left' }}>Orders</th>
            <th style={{ float: 'right' }}>Completed Orders</th>
          </tr>
          <tr>
            <td style={{ float: 'left' }} className="salesTotal">
              135
            </td>
            <td style={{ float: 'right' }} className="salesTotal">
              124
            </td>
          </tr>
        </table>

        {/* <div>
          <div style={{ float: 'left' }}>
            <h3>Orders</h3>
            <h2 className="salesTotal">135</h2>
          </div>
          <div style={{ float: 'right' }}>
            <h3>Completed Orders</h3>
            <h2 className="salesTotal">124</h2>
          </div>
        </div> */}
      </div>
    );
  }
}

export default Progress;
