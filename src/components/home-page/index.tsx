import * as styles from '@src/components/home-page/style.pcss';
import { autobind } from 'core-decorators';
import * as React from 'react';
import { connect } from 'react-redux';
import homePageSelector from '../../selector/home-page-selector';
import Coordinate from '../coordinate';
import Cube from '../cube';

@(connect(homePageSelector) as any)
@autobind
class HomePage extends React.PureComponent<any, any> {
  public handleClick(args: any) {
    return (e: React.SyntheticEvent<EventTarget>): boolean => {
      e.preventDefault();
      console.log(args);
      return false;
    };
  }

  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/homt-page/index.tsx');
    const { appName } = this.props;
    return (
      <div className={styles.root}>
        <div className={styles.container}>
          <h1>
            <a href="" onClick={this.handleClick(appName)}>{appName}</a>
          </h1>
          <p>A step into the future of sensory experiences.</p>
          <h3>Light</h3>
          <section>
            <Coordinate>
              <Cube size={50} z={-100}/>
              <Cube size={50}/>
              <Cube size={50} z={100}/>
            </Coordinate>
          </section>
          <h3>Depth</h3>
          <section>
            456
          </section>
          <h3>Motion</h3>
          <section>
            789
          </section>
          <h3>Material</h3>
          <section>
            101112
          </section>
          <h3>Scale</h3>
          <section>
            131415
          </section>
        </div>
      </div>
    );
  }
}

export default HomePage;
