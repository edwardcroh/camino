import React, { Component } from 'react';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <h2>Sales</h2>
        <h4>135</h4>
        <div>
          <table style={{ width: '100%' }}>
            <tr>
              <td
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'red',
                  borderRadius: '50%',
                  display: 'inlineBlock',
                  float: 'right'
                }}
              />
              <td>Hoodie</td>
              <td style={{ float: 'right' }}>$74.00</td>
            </tr>
            <tr>
              <td
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'orange',
                  borderRadius: '50%',
                  display: 'inlineBlock',
                  float: 'right'
                }}
              />
              <td>Fitted Cap</td>
              <td style={{ float: 'right' }}>$69.50</td>
            </tr>
            <tr>
              <td
                style={{
                  height: '20px',
                  width: '20px',
                  backgroundColor: 'blue',
                  borderRadius: '50%',
                  display: 'inlineBlock',
                  float: 'right'
                }}
              />
              <td>Bracelet</td>
              <td style={{ float: 'right' }}>$39.05</td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Sales;
