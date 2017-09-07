import * as styles from '@src/components/home-page/style.pcss';
import { autobind } from 'core-decorators';
import * as React from 'react';
import { connect } from 'react-redux';
import homePageSelector from '../../selector/home-page-selector';
import Moudle from '../module';

import * as chrome from '@src/style/img/170906-sun-flare-chrome.png';
import * as safari from '@src/style/img/170906-sun-flare-safari.png';

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
          <Moudle title={'Light'}>
            123
          </Moudle>
          <Moudle title={'Depth'}>
            123
          </Moudle>
          <Moudle title={'Motion'}>
            123
          </Moudle>
          <Moudle title={'Material'}>
            <h4>chrome</h4>
            <img src={chrome} alt="chrome" className={styles.maImg} />
            <h4>safari</h4>
            <img src={safari} alt="safari" className={styles.maImg} />
            <h4>example</h4>
            <div className={styles.ma}>
              {
                Array.from({ length: 16}).map((item, idx) => {
                  const row = (Math.floor(idx / 4) + 1) * 20 / 100;
                  const line = (Math.floor(idx % 4) + 1) * 20 / 100;
                  {
                    /*
                      -webkit-backdrop-filter: blur(15px); Safari for macOS & iOS
                      backdrop-filter: blur(15px); Google Chrome
                      background-color: rgba(255, 255, 255, 0.2); 设置背景半透明黑色
                    */
                  }
                  const value = 50;
                  const blurValue = row * value;
                  const opacityValue = line * 0.5;
                  /* tslint:disable object-literal-sort-keys */
                  const divStyle = {
                    webkitBackdropFilter: `blur(${blurValue}px)`,
                    backdropFilter: `blur(${blurValue}px)`,
                    backgroundColor: `rgba(255, 255, 255, ${opacityValue})`,
                  };
                  return (
                    <div className={styles.maItem} style={divStyle}>
                      blur: {blurValue}px<br />
                      rgba: 255, 255, 255, {opacityValue}
                    </div>
                  );
                })
              }
            </div>
          </Moudle>
          <Moudle title={'Scale'}>
            123
          </Moudle>
        </div>
      </div>
    );
  }
}

export default HomePage;
