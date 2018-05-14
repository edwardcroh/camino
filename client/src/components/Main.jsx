import React, { Component } from 'react';
import Progress from './Progress.jsx';
import Data from './Data.jsx';
import Sales from './Sales.jsx';

class Main extends Component {
  constructor(props) {
    super(props);
    this.state = {
      totalOrders: 0,
      totalSales: 0,
      hoodie: [],
      fitted: [],
      bracelet: []
    };
  }

  componentWillReceiveProps(props) {
    let totalSales = 0;
    let hoodieData = [];
    let fittedData = [];
    let braceletData = [];
    this.props.sales.orders.filteredOrders.map(order => {
      order.items.map(item => {
        totalSales += item.price;
      });
      return totalSales;
    });

    this.props.sales.orders.filteredOrders.map(order => {
      order.items.map(item => {
        return item.name === 'Hoodie';
      });
    });
    let fittedData = this.props.sales.orders.filteredOrders.map(order => {
      return order.items.filter(item => {
        return item.name === 'Fitted Cap';
      });
    });
    let braceletData = this.props.sales.orders.filteredOrders.map(order => {
      return order.items.filter(item => {
        return item.name === 'Bracelet';
      });
    });
    this.setState({
      totalOrders: this.props.sales.orders.filteredOrders.length,
      totalSales: totalSales,
      hoodie: hoodieData,
      fitted: fittedData,
      bracelet: braceletData
    });
  }

  render() {
    return (
      <div>
        {console.log(this.props.sales.orders.filteredOrders)}
        <Progress ordered={this.state.totalOrders} />
        <Data total={this.state.totalSales} data={this.props.sales} />
        <Sales info={this.state} />
      </div>
    );
  }
}

export default Main;
