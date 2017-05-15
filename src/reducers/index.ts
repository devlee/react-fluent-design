import { routerReducer } from 'react-router-redux';
import { combineReducers } from 'redux';

import app from './app';

const reducers = combineReducers({
  router: routerReducer,
  app,
});

export default reducers;
