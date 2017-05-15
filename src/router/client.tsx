import * as React from 'react';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import store, { history } from '../store';

class ClientRouter extends React.PureComponent<any, any> {
  public render() {
    console.log('[render] ./src/router/client.tsx');
    return (
      <Provider store={store}>
        <ConnectedRouter history={history}>
          {this.props.children}
        </ConnectedRouter>
      </Provider>
    );
  }
}

export default ClientRouter;
