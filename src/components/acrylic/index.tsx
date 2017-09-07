import * as React from 'react';

import * as ReactDOM from 'react-dom';

import * as styles from '@src/components/acrylic/style.pcss';

import * as classnames from 'classnames';

class Acrylic extends React.PureComponent<any, any> {
  constructor() {
    super();
    this.state = {
      lightLeft: 0,
      lightTop: 0,
      showLight: false,
    };
  }

  public componentDidMount() {
    const refRoot = (this as any).refRoot;
    if (refRoot) {
      const refRootNode = ReactDOM.findDOMNode(refRoot);
      refRootNode.addEventListener('pointerenter', (e) => {
        const { offsetX, offsetY } = e;
        this.setState({
          lightLeft: offsetX - 50,
          lightTop: offsetY - 50,
          showLight: true,
        });
      });
      refRootNode.addEventListener('pointerleave', () => {
        this.setState({
          showLight: false,
        });
      });
      refRootNode.addEventListener('pointermove', (e) => {
        const { offsetX, offsetY } = e;
        this.setState({
          lightLeft: offsetX - 50,
          lightTop: offsetY - 50,
        });
      });
    }
  }

  public render() {
    const { children, className } = this.props;
    const { showLight, lightLeft, lightTop } = this.state;
    const rootClass = classnames({
      [styles.root]: true,
      [className]: Boolean(className),
    });
    const lightClass = classnames({
      [styles.light]: true,
      [styles.show]: showLight,
    });
    const lightStyle = {
      left: lightLeft,
      top: lightTop,
    };
    return (
      /* tslint:disable jsx-no-lambda */
      <div className={rootClass} ref={(c) => { (this as any).refRoot = c; }}>
        <div className={lightClass} style={lightStyle}/>
        <div className={styles.rootInner}>
          {children}
        </div>
      </div>
    );
  }
}

export default Acrylic;
