import * as React from 'react';

class DepthPage extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/depth-page/index.tsx');
    return (
      <div>
        <h1>Depth Page</h1>
      </div>
    );
  }
}

export default DepthPage;
