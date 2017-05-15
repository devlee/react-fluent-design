import * as React from 'react';

import * as styles from '@src/components/page-footer/style.pcss';

class PageFooter extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    return (
      <footer className={styles.root}>
        <ul className={styles.list}>
          <li className={styles.item}>
            <dl className={styles.subList}>
              <dt className={styles.subTitle}>Microsoft</dt>
              <dd className={styles.subItem}>
                <a href="http://fluent.microsoft.com/" target="_blank">
                  Fluent&nbsp;Design&nbsp;System
                </a>
              </dd>
            </dl>
          </li>
          <li className={styles.item}>
            <dl className={styles.subList}>
              <dt className={styles.subTitle}>About</dt>
              <dd className={styles.subItem}>
                <a href="https://github.com/devlee/react-fluent-design" target="_blank">
                  React&nbsp;Fluent&nbsp;Design
                </a>
              </dd>
            </dl>
          </li>
          <li className={styles.item}>
            <dl className={styles.subList}>
              <dt className={styles.subTitle}>Contact</dt>
              <dd className={styles.subItem}>
                <a href="mailto:devlee@outlook.com">
                  devlee@outlook.com
                </a>
              </dd>
            </dl>
          </li>
        </ul>
        <div className={styles.copyright}>
          <span className={styles.content}>devlee&nbsp;❤&nbsp;2017</span>
        </div>
      </footer>
    );
  }
}

export default PageFooter;
