import * as styles from '@src/components/ball/style.pcss';

import * as React from 'react';

import * as PropTypes from 'prop-types';

const baseSize = 100;

class Ball extends React.PureComponent<any, any> {
  private static propTypes = {
    size: PropTypes.number,
  };
  private static defaultProps = {
    size: baseSize,
  };
  public render() {
    const { size } = this.props;
    // const rootStyle = {
    //   height: `${size}px`,
    //   width: `${size}px`,
    // };
    const scale = size / baseSize;
    const total = 20 * scale;
    const half = total / 2;
    const dis = 10;
    const r = dis * half / 2;
    return (
      <div
        className={styles.root}
      >
        {
          Array.from({ length: total + 1 }).map((item, idx) => {
            const disO = idx < half ? (half - idx) * dis / 2 : (idx - half) * dis / 2;
            const itemD = Math.sqrt((r * r) - (disO * disO)) * 2;
            return (
              <div
                className={styles.ring}
                style={{
                  height: `${itemD}px`,
                  transform: `translate3d(-50%, -50%, ${(idx - half) * dis / 2}px)`,
                  width: `${itemD}px`,
                }}
              />
            );
          })
        }
      </div>
    );
  }
}

export default Ball;
