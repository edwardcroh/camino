import { combineReducers } from 'redux';
// import getToday from '../reducers/getToday';
// import getWeek from '../reducers/getWeek';
// import getMonth from '../reducers/getMonth';
import dataToday from './getToday';

// const rootReducer = combineReducers({ getToday, getWeek, getMonth });
const rootReducer = combineReducers({
  data_today: dataToday
});

export default rootReducer;
