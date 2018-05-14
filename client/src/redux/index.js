import { createStore, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import rootReducer from './reducers/rootReducer';
import logger from 'redux-logger';

const middleware = applyMiddleware(logger);
const store = createStore(rootReducer, composeWithDevTools());

export default store;
