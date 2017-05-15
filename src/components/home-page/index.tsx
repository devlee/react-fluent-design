import * as styles from '@src/components/home-page/style.pcss';
import * as React from 'react';
import { connect } from 'react-redux';
import homePageSelector from '../../selector/home-page-selector';

@connect(homePageSelector)
class HomePage extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/homt-page/index.tsx');
    const { appName } = this.props;
    return (
      <div className={styles.root}>
        <h1>Home Page</h1>
        <p>
          This app's name is {appName}.
        </p>
      </div>
    );
  }
}

export default HomePage;
