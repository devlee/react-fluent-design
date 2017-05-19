import * as styles from '@src/components/cube/style.pcss';
import * as React from 'react';

const baseSize = 100;

class Cube extends React.PureComponent<any, any> {
  public static defaultProps = {
    size: baseSize,
    z: 0,
  };

  constructor(props: any) {
    super();
    const { size, z } = props;
    this.state = {
      scale: size / baseSize,
      z,
    };
  }

  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/cube/index.tsx');
    // 相对于用户而言
    // surface
    // 0上面 1正面 2右面 3后面 4左面 5下面
    // root
    // rotateX 0-向下旋转 0+向上旋转
    // rotateY 0-向左旋转 0+向右旋转
    const { scale, z } = this.state;
    const translateZ = baseSize * 0.5 * scale;
    const threeSurfaceStyle = [
      {
        background: `
          radial-gradient(
            circle at 0 ${translateZ * 2}px, transparent 10%, rgba(153, 153, 153, 1) 100%
          )`,
      },
      {
        background: `radial-gradient(circle at 0 0, transparent 10%, rgba(153, 153, 153, 1) 100%)`,
      },
      {
        background: `
          radial-gradient(
            circle at ${translateZ * 2}px 0, transparent 10%, rgba(153, 153, 153, 1) 100%
          )`,
      },
    ];
    const surfaceStyles = [
      {
        // ...threeSurfaceStyle[0],
        transform: `rotateX(90deg) translateZ(${translateZ}px)`,
      },
      {
        // ...threeSurfaceStyle[1],
        transform: `translateZ(${translateZ}px)`,
      },
      {
        transform: `rotateY(90deg) translateZ(${translateZ}px)`,
      },
      {
        transform: `rotateY(180deg) translateZ(${translateZ}px)`,
      },
      {
        // ...threeSurfaceStyle[2],
        transform: `rotateY(-90deg) translateZ(${translateZ}px)`,
      },
      {
        transform: `rotateX(-90deg) translateZ(${translateZ}px)`,
      },
    ];
    return (
      <div
        className={styles.root}
        style={
          {
            height: `${scale * baseSize}px`,
            marginLeft: `-${scale * baseSize * 0.5}px`,
            marginTop: `-${scale * baseSize * 0.5}px`,
            position: 'absolute',
            transform: `translateZ(${z}px)`,
            width: `${scale * baseSize}px`,
          }
        }
      >
        {
          Array.from({ length: 6 }).map((item, idx) => (
            <div
              key={Math.random()}
              className={styles.surface}
              style={
                {
                  ...surfaceStyles[idx],
                  height: `${scale * baseSize}px`,
                  width: `${scale * baseSize}px`,
                }
              }
            />
          ))
        }
      </div>
    );
  }
}

export default Cube;
