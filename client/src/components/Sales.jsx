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
          <span className="info-title">Sales</span>
          <br />
          <span className="sales-total">135</span>
        </div>
        <div>
          <table className="sales-table">
            <tr>
              <td className="table-row">
                <span
                  style={{
                    backgroundColor: '#C85650'
                  }}
                  className="legend-icon"
                />{' '}
                <span className="item-description">Hoodie</span>
                <span className="price">$74.00</span>
              </td>
            </tr>
            <tr>
              <td className="table-row">
                <span
                  style={{
                    backgroundColor: '#FFC541'
                  }}
                  className="legend-icon"
                />{' '}
                <span className="item-description">Fitted Cap</span>
                <span className="price">$69.50</span>
              </td>
            </tr>
            <tr>
              <td className="table-row">
                <span
                  style={{
                    backgroundColor: '#00D5DC'
                  }}
                  className="legend-icon"
                />{' '}
                <span className="item-description">Bracelet</span>
                <span className="price">$39.05</span>
              </td>
            </tr>
          </table>
        </div>
      </div>
    );
  }
}

export default Sales;
