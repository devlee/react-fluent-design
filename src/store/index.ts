import createHistory from 'history/createBrowserHistory';
import { ConnectedRouter, push, routerMiddleware } from 'react-router-redux';
import { applyMiddleware, combineReducers, createStore } from 'redux';
import reducers from '../reducers';

export const history = createHistory();

const middleware = routerMiddleware(history);

const store = createStore(
  reducers,
  applyMiddleware(middleware),
);

export default store;
