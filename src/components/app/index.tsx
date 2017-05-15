import * as styles from '@src/components/app/style.pcss';
import * as React from 'react';
import { Route } from 'react-router';

import * as LoadAboutPage from 'bundle-loader?lazy&name=[name]!../about-page';
import ClientRouter from '../../router/client';
import Bundle from '../../webpack/bundle';
import HomePage from '../home-page';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';

const AboutPage = () => (
  <Bundle load={LoadAboutPage}>
    {
      (Comp: any) => <Comp />
    }
  </Bundle>
);

class App extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/app/index.tsx');
    return (
      <ClientRouter>
        <div className={styles.root}>
          <PageHeader />
          <Route exact={true} path="/" component={HomePage} />
          <Route path="/about" component={AboutPage} />
          <PageFooter />
        </div>
      </ClientRouter>
    );
  }
}

export default App;
