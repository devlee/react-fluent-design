import * as React from 'react';

class Image extends React.PureComponent<any, any> {
  public render() {
    const { asWrapper, children, url } = this.props;
    const wrapperStyle = {
      backgroundImage: `url(${url})`,
      backgroundSize: 'cover',
    };
    const result = asWrapper ? (
      <div style={wrapperStyle}>
        { children }
      </div>
    ) : (
      <img src={url} alt="" />
    );
    return result;
  }
}

export default Image;
