import { GET_APP_DATA, SET_APP_DATA } from '../actions';

import * as config from '../../config.json';

const initState: any = {
  name: config.appName,
};

export default ((state: any = initState, action: any): any => {
  switch (action.type) {
    case GET_APP_DATA: {
      return state;
    }
    default:
      return state;
  }
});
