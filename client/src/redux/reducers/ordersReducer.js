import moment from 'moment';

const orders = [
  {
    purchaseDate: moment().subtract(5, 'days'),
    items: [
      {
        name: 'hoodie',
        price: 40
      },
      {
        name: 'fitted cap',
        price: 25
      },
      {
        name: 'shoes',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(23, 'days'),
    items: [
      {
        name: 'hoodie',
        price: 40
      },
      {
        name: 'fitted cap',
        price: 25
      },
      {
        name: 'shoes',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(29, 'days'),
    items: [
      {
        name: 'hoodie',
        price: 40
      },
      {
        name: 'fitted cap',
        price: 25
      },
      {
        name: 'shoes',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(1, 'days'),
    items: [
      {
        name: 'hoodie',
        price: 40
      },
      {
        name: 'fitted cap',
        price: 25
      },
      {
        name: 'shoes',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment(),
    items: [
      {
        name: 'hoodie',
        price: 40
      },
      {
        name: 'fitted cap',
        price: 25
      },
      {
        name: 'shoes',
        price: 30
      }
    ]
  }
];

export default function(state = { orders, filteredOrders: orders }, action) {
  switch (action.type) {
    case 'SET_FILTERED_ORDERS':
      return {
        orders: state.orders,
        filteredOrders: state.orders.filter(order => {
          return action.payload.validate(order.purchaseDate);
        })
      };

    default:
      return state;
  }
}
