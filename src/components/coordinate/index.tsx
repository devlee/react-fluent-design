import * as styles from '@src/components/coordinate/style.pcss';
import * as React from 'react';

class Coordinate extends React.PureComponent<any, any> {
  private t: any = null;

  constructor() {
    super();
    this.state = {
      speed: 20,
      x: 0,
      y: -45,
      z: 0,
    };
    this.plus = this.plus.bind(this);
    this.minus = this.minus.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.handleMouseDown = this.handleMouseDown.bind(this);
    this.handleMouseUp = this.handleMouseUp.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }

  public plus(key: string) {
    return () => {
      this.setState({
        [key]: this.state[key] + 1,
      });
    };
  }

  public minus(key: string) {
    return () => {
      this.setState({
        [key]: this.state[key] - 1,
      });
    };
  }

  public handleClick(key: string, value: string) {
    if (value === '+') {
      return this.plus(key);
    }

    return this.minus(key);
  }

  public handleMouseDown(key: string, value: string) {
    const { speed } = this.state;
    return () => {
      this.t = window.setInterval(this.handleClick(key, value), 1000 / speed);
    };
  }

  public handleMouseUp() {
    window.clearInterval(this.t);
  }

  public handleChange(key: string) {
    return (e: any) => {
      this.setState({
        [key]: e.target.value,
      });
    };
  }

  public render() {
    const { speed, x, y, z } = this.state;
    const mainStyle = {
      transform: `rotateX(${x}deg) rotateY(${y}deg) rotateZ(${z}deg)`,
    };
    return (
      <div className={styles.root}>
        <div className={styles.main} style={mainStyle}>
          <div className={styles.x}/>
          <div className={styles.y}/>
          <div className={styles.z}/>
          <div className={styles.content}>
            {this.props.children}
          </div>
        </div>
        <div className={styles.options}>
          <ul>
            <li>
              <span>speed</span>
              <input type="text" value={speed} onChange={this.handleChange('speed')}/>
            </li>
            <li>
              <span>rotateX</span>
              <input type="text" value={x} onChange={this.handleChange('x')}/>
              <button
                onClick={this.handleClick('x', '+')}
                onMouseDown={this.handleMouseDown('x', '+')}
                onMouseUp={this.handleMouseUp}
              >
                +
              </button>
              <button
                onClick={this.handleClick('x', '-')}
                onMouseDown={this.handleMouseDown('x', '-')}
                onMouseUp={this.handleMouseUp}
              >
                -
              </button>
            </li>
            <li>
              <span>rotateY</span>
              <input type="text" value={y} onChange={this.handleChange('y')}/>
              <button
                onClick={this.handleClick('y', '+')}
                onMouseDown={this.handleMouseDown('y', '+')}
                onMouseUp={this.handleMouseUp}
              >
                +
              </button>
              <button
                onClick={this.handleClick('y', '-')}
                onMouseDown={this.handleMouseDown('y', '-')}
                onMouseUp={this.handleMouseUp}
              >
                -
              </button>
            </li>
            <li>
              <span>rotateZ</span>
              <input type="text" value={z} onChange={this.handleChange('z')}/>
              <button
                onClick={this.handleClick('z', '+')}
                onMouseDown={this.handleMouseDown('z', '+')}
                onMouseUp={this.handleMouseUp}
              >
                +
              </button>
              <button
                onClick={this.handleClick('z', '-')}
                onMouseDown={this.handleMouseDown('z', '-')}
                onMouseUp={this.handleMouseUp}
              >
                -
              </button>
            </li>
          </ul>
        </div>
      </div>
    );
  }
}

export default Coordinate;
