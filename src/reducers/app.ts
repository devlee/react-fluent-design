import { GET_APP_DATA, SET_APP_DATA } from '../actions';

const initState: any = {
  name: 'react-fluent-design',
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
