// export default function getDate(state = [], action) {
//   switch (action.type) {
//     case 'TODAY':
//       return (state = state.slice(1).concat(action.payload));
//     case 'WEEK':
//       return (state = state.slice(1).concat(action.payload));
//     case 'MONTH':
//       return (state = state.slice(1).concat(action.payload));
//     default:
//       return state;
//   }
// }

// export default function() {
//   return [
//     {
//       orders: 13,
//       completedOrders: 35,
//       sales: 13,
//       hoodie: '42.22',
//       fittedCap: '28.72',
//       bracelet: '12.46'
//     }
//   ];
// }

export default (state = null, action) => {
  switch (action.type) {
    case 'data_today':
      return action.payload;
      break;
  }
  return state;
};
