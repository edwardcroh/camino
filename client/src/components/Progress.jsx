import React, { Component } from 'react';
import LinearProgress from 'material-ui/LinearProgress';

class Progress extends Component {
  constructor(props) {
    super(props);
    this.state = {
      total: 20
    };
  }

  render() {
    return (
      <div style={{ padding: '20px 0px' }}>
        <LinearProgress
          mode="determinate"
          value={this.props.ordered}
          max={this.state.total}
          color="rgb(255, 132, 127)"
        />
        <table width="100%">
          <thead>
            <tr>
              <th style={{ float: 'left', paddingTop: '10px' }}>Orders</th>
              <th style={{ float: 'right', paddingTop: '10px' }}>
                Completed Orders
              </th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td style={{ float: 'left' }} className="sales-total">
                {this.state.total}
              </td>
              <td style={{ float: 'right' }} className="sales-total">
                {this.props.ordered}
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    );
  }
}

export default Progress;
