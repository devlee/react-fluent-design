import * as styles from '@src/components/app/style.pcss';
import * as React from 'react';
import { Route } from 'react-router';

import * as LoadAboutPage from 'bundle-loader?lazy&name=[hash:6]!../about-page';
import * as LoadDepthPage from 'bundle-loader?lazy&name=[hash:6]!../depth-page';
import * as LoadLightPage from 'bundle-loader?lazy&name=[hash:6]!../light-page';
import * as LoadMaterialPage from 'bundle-loader?lazy&name=[hash:6]!../material-page';
import * as LoadMotionPage from 'bundle-loader?lazy&name=[hash:6]!../motion-page';
import * as LoadScalePage from 'bundle-loader?lazy&name=[hash:6]!../scale-page';
import ClientRouter from '../../router/client';
import Bundle from '../../webpack/bundle';
import HomePage from '../home-page';
import PageFooter from '../page-footer';
import PageHeader from '../page-header';

const LightPage = () => (
  <Bundle load={LoadLightPage}>
    {
      (Comp: any) => <Comp />
    }
  </Bundle>
);

const DepthPage = () => (
  <Bundle load={LoadDepthPage}>
    {
      (Comp: any) => <Comp />
    }
  </Bundle>
);

const MotionPage = () => (
  <Bundle load={LoadMotionPage}>
    {
      (Comp: any) => <Comp />
    }
  </Bundle>
);

const MaterialPage = () => (
  <Bundle load={LoadMaterialPage}>
    {
      (Comp: any) => <Comp />
    }
  </Bundle>
);

const ScalePage = () => (
  <Bundle load={LoadScalePage}>
    {
      (Comp: any) => <Comp />
    }
  </Bundle>
);

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
          <Route path="/light" component={LightPage} />
          <Route path="/depth" component={DepthPage} />
          <Route path="/motion" component={MotionPage} />
          <Route path="/material" component={MaterialPage} />
          <Route path="/scale" component={ScalePage} />
          <Route path="/about" component={AboutPage} />
          <PageFooter />
        </div>
      </ClientRouter>
    );
  }
}

export default App;
