import * as styles from '@src/components/page-header/style.pcss';
import * as React from 'react';
import { Link } from 'react-router-dom';
import nav from './nav';

class PageHeader extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    return (
      <header className={styles.root}>
        <nav className={styles.nav}>
          {
            nav.list.map((item) => (
              <Link
                key={item.title}
                to={item.to}
                className={styles.navItem}
              >
                {
                  item.hoverImg ? (
                    <i
                      className={`${styles.navItemIcon} ${styles[item.title.toLocaleLowerCase()]}`}
                      style={
                        {
                          backgroundImage: `url(${item.hoverImg})`,
                        }
                      }
                    />
                  ) : null
                }
                <span className={styles.navItemTitle}>{item.title}</span>
              </Link>
            ))
          }
        </nav>
      </header>
    );
  }
}

export default PageHeader;
