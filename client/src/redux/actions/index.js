// export default {
//   // getData: action => (
//   //   {
//   //     type: 'TODAY',
//   //     payload: {
//   //       orders: 13,
//   //       completedOrders: 35,
//   //       sales: 13,
//   //       hoodie: '42.22',
//   //       fittedCap: '28.72',
//   //       bracelet: '12.46'
//   //     }
//   //   },
//   //   {
//   //     type: 'WEEK',
//   //     payload: {
//   //       orders: 135,
//   //       completedOrders: 124,
//   //       sales: 135,
//   //       hoodie: '74.00',
//   //       fittedCap: '69.50',
//   //       bracelet: '39.05'
//   //     }
//   //   },
//   //   {
//   //     type: 'MONTH',
//   //     payload: {
//   //       orders: 200,
//   //       completedOrders: 180,
//   //       sales: 200,
//   //       hoodie: '172.20',
//   //       fittedCap: '119.84',
//   //       bracelet: '98.39'
//   //     }
//   //   }
//   // )
//   getToday: data => ({ payload: data }),
//   getWeek: data => ({ payload: data }),
//   getMonth: data => ({ payload: data })
// };

export const getTodayData = () => ({
  type: 'DATA_TODAY',
  payload: [
    {
      orders: 13,
      completedOrders: 35,
      sales: 13,
      hoodie: '42.22',
      fittedCap: '28.72',
      bracelet: '12.46'
    }
  ]
});
