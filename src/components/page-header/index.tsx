import * as styles from '@src/components/page-header/style.pcss';
import * as React from 'react';
import { Link } from 'react-router-dom';

class PageHeader extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    return (
      <header className={styles.root}>
        <nav>
          <Link to="/" className={styles.navItem}>Home</Link>
          <Link to="/about" className={styles.navItem}>About</Link>
        </nav>
      </header>
    );
  }
}

export default PageHeader;
