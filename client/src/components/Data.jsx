import React, { Component } from 'react';
import { Line } from 'react-chartjs-2';

// // var myChart = new RadialProgressChart('.testing', settings);

// var settings = {
//   diameter: 100,
//   stroke: {
//     width: 40,
//     gap: 2
//   },
//   shadow: {
//     width: 4
//   },
//   animation: {
//     duration: 1750,
//     delay: 200
//   },
//   min: 0,
//   max: 100,
//   round: true,

//   // array of numbers
//   // series: [10, 15, 5],

//   // or array of objects
//   series: [
//     {
//       value: required,

//       // // color object (optional)
//       // color: {
//       //     solid: '#fe08b5',
//       //     background: 'red'
//       // },

//       // // or interpolate between two colors
//       // color: {
//       //     interpolate: ['#000000', '#ff0000'],
//       //     background: 'red'
//       // },

//       // // or use a gradient object (check out svg gradient specs)
//       // color: {
//       //     radialGradient: {cx: '60', cy: '60', r: '50'},
//       //     stops: [
//       //       {offset: '0%', 'stop-color': '#fe08b5', 'stop-opacity': 1},
//       //       {offset: '100%', 'stop-color': '#ff1410', 'stop-opacity': 1}
//       //     ]
//       // },

//       // // if specifying a background is not necessary you can use these shortcuts
//       // color: '#fe08b5',
//       color: ['#000000', '#ff0000']
//     }
//   ],

//   // simple center text
//   center: 'HOODIE'

//   //   // or function which returns a string
//   //   center: function(value, index, item){}

//   //   // Need multilines? Use an array of mixed strings/functions, each element is a new line
//   //   center: ['foo bar', function(value, index, item){ ... }, ...]

//   //   // if positioning is needed use this format
//   //   center: {
//   //       content: string/function/array,
//   //       y: int (default: 0),
//   //       x: int (default: 0)
//   //   }
// };

class Data extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className="data">
        <h2>Total Sales</h2>
        <h4>$448.50</h4>
        <div id="testing">
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
            // width={100}
            // height={50}
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
      </div>
    );
  }
}

export default Data;
