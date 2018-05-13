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
          {/* <table className="salesTable">
            <tr>
              <td
                style={{
                  backgroundColor: '#C85650'
                }}
                className="legendIcon"
              />
              <td className="itemDescription">Hoodie</td>
              <td className="price">$74.00</td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: '#FFC541'
                }}
                className="legendIcon"
              />
              <td className="itemDescription">Fitted Cap</td>
              <td className="price">$69.50</td>
            </tr>
            <tr>
              <td
                style={{
                  backgroundColor: '#00D5DC'
                }}
                className="legendIcon"
              />
              <td className="itemDescription">Bracelet</td>
              <td className="price">$39.05</td>
            </tr>
          </table> */}
        </div>
      </div>
    );
  }
}

export default Sales;
