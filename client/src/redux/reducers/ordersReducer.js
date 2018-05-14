import moment from 'moment';

const orders = [
  {
    purchaseDate: moment().subtract(5, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(3, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Fitted Cap',
        price: 25
      },
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(6, 'days'),
    items: [
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(2, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Fitted Cap',
        price: 25
      }
    ]
  },
  {
    purchaseDate: moment().subtract(23, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Fitted Cap',
        price: 25
      },
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(29, 'days'),
    items: [
      {
        name: 'Fitted Cap',
        price: 25
      },
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(28, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      }
    ]
  },
  {
    purchaseDate: moment().subtract(27, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Fitted Cap',
        price: 25
      },
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(25, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Fitted Cap',
        price: 25
      }
    ]
  },
  {
    purchaseDate: moment().subtract(12, 'days'),
    items: [
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(20, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Fitted Cap',
        price: 25
      },
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment().subtract(1, 'days'),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Bracelet',
        price: 30
      }
    ]
  },
  {
    purchaseDate: moment(),
    items: [
      {
        name: 'Hoodie',
        price: 40
      },
      {
        name: 'Fitted Cap',
        price: 25
      },
      {
        name: 'Bracelet',
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
      let today = moment();
      return {
        orders: orders,
        filteredOrders: orders.filter(order => {
          return moment(order.purchaseDate.format('YYYY-MM-DD')).isSame(
            today.format('YYYY-MM-DD')
          );
        })
      };
  }
}
