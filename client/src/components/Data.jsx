import React, { Component } from 'react';
import { Line, Doughnut } from 'react-chartjs-2';

class Data extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <div className="data">
          <span className="info-title">Total Sales</span>
          <br />
          <span className="total">$448.50</span>
        </div>
        <div>
          <Line
            data={{
              labels: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
              datasets: [
                {
                  label: 'HOODIE',
                  data: [12, 4, 7, 2, 5, 2, 3, 10, 11, 15],
                  backgroundColor: '#B75464',
                  borderWidth: 1,
                  radius: 0
                },
                {
                  label: 'FITTED CAP',
                  data: [2, 12, 1, 3, 8, 11, 4, 6, 8, 10],
                  backgroundColor: '#C48745',
                  borderWidth: 1,
                  radius: 0
                },
                {
                  label: 'BRACELET',
                  data: [10, 2, 4, 1, 5, 7, 5, 3, 6, 7],
                  backgroundColor: '#00D5DC',
                  borderWidth: 1,
                  radius: 0
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              legend: {
                display: false
              },
              scales: {
                xAxes: [
                  {
                    gridLines: {
                      display: false
                    }
                  }
                ],
                yAxes: [
                  {
                    stacked: true,
                    ticks: {
                      beginAtZero: true,
                      display: false
                    },
                    gridLines: {
                      display: false
                    }
                  }
                ]
              }
            }}
          />
        </div>
        <br />
        <div>
          <Doughnut
            data={{
              labels: ['Hoodie', 'Fitted Cap', 'Bracelet'],
              datasets: [
                {
                  data: [300, 50, 100],
                  backgroundColor: ['#C85650', '#FFC541', '#00D5DC'],
                  hoverBackgroundColor: ['#C85650', '#FFC541', '#00D5DC']
                }
              ]
            }}
            options={{
              maintainAspectRatio: false,
              legend: {
                labels: {
                  fontColor: 'rgb(255, 242, 210)'
                }
              }
            }}
          />
        </div>
      </div>
    );
  }
}

export default Data;
