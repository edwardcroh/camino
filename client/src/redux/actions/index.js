import moment from 'moment';

export const DATES = {
  TODAY: {
    id: 'today',
    validate: momentDate => {
      const today = moment();
      return moment(momentDate.format('YYYY-MM-DD')).isSame(
        today.format('YYYY-MM-DD')
      );
    }
  },
  WEEK: {
    id: 'week',
    validate: momentDate => {
      const weekAgo = moment().subtract(7, 'days');
      return momentDate.isSameOrAfter(weekAgo);
    }
  },
  MONTH: {
    id: 'month',
    validate: momentDate => {
      const monthAgo = moment().subtract(1, 'months');
      return momentDate.isSameOrAfter(monthAgo);
    }
  }
};

export const setFilteredOrders = date => {
  return { type: 'SET_FILTERED_ORDERS', payload: date };
};
