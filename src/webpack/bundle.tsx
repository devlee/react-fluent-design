import { autobind } from 'core-decorators';
import * as React from 'react';

@autobind
class Bundle extends React.PureComponent<any, any> {
  constructor() {
    super();
    this.state = {
      mod: null,
    };
  }

  public render() {
    const { mod } = this.state;
    return mod ? this.props.children(mod) : null;
  }

  private componentWillMount() {
    this.load(this.props);
  }

  private componentWillReceiveProps(nextProps: any) {
    if (nextProps.load !== this.props.load) {
      this.load(nextProps);
    }
  }

  private load(props: any) {
    this.setState({
      mod: null,
    });
    props.load((mod: any) => {
      this.setState({
        mod: mod.default ? mod.default : mod,
      });
    });
  }
}

export default Bundle;
