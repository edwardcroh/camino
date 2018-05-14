import React, { Component } from 'react';

class Sales extends Component {
  constructor(props) {
    super(props);
    this.state = {
      saleTotal: this.props.info.totalOrders,
      hoodieTotal: this.props.info.hoodie.length,
      fittedTotal: this.props.info.fitted.length,
      braceletTotal: this.props.info.bracelet.length
    };
  }

  render() {
    return (
      <div>
        <div className="data">
          {console.log('^^^^^', this.props.info)}
          <span className="info-title">Sales</span>
          <br />
          <span className="sales-total">{this.state.saleTotal}</span>
        </div>
        <div>
          <table className="sales-table">
            <tbody>
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
            </tbody>
          </table>
        </div>
      </div>
    );
  }
}

export default Sales;
