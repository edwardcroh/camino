import React, { Component } from 'react';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <div className="data">
          <h2>Sales</h2>
          <h4 className="salesTotal">135</h4>
        </div>
        <div>
          <table className="salesTable">
            <tr>
              <td className="tableRow">
                <span
                  style={{
                    backgroundColor: '#C85650'
                  }}
                  className="legendIcon"
                />{' '}
                <span className="itemDescription">Hoodie</span>
                <span className="price">$74.00</span>
              </td>
              {/* <td className="price">$74.00</td> */}
            </tr>
            <tr>
              <td className="tableRow">
                <span
                  style={{
                    backgroundColor: '#FFC541'
                  }}
                  className="legendIcon"
                />{' '}
                <span className="itemDescription">Fitted Cap</span>
                <span className="price">$69.50</span>
              </td>
              {/* <td className="price">$69.50</td> */}
            </tr>
            <tr>
              <td className="tableRow">
                <span
                  style={{
                    backgroundColor: '#00D5DC'
                  }}
                  className="legendIcon"
                />{' '}
                <span className="itemDescription">Bracelet</span>
                <span className="price">$39.05</span>
              </td>
              {/* <td className="price">$39.05</td> */}
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Sales;
