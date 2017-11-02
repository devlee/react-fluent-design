import * as styles from '@src/components/module/style.pcss';

import * as React from 'react';

import * as PropTypes from 'prop-types';

class Module extends React.PureComponent<any, any> {
  private static propTypes = {
    title: PropTypes.string,
  };

  private static defaultProps = {
    title: '',
  };

  public render() {
    const { title, children } = this.props;
    return (
      <div>
        <h3>{title}</h3>
        <section className={styles.content}>
          {children}
        </section>
      </div>
    );
  }
}

export default Module;
