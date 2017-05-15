import * as React from 'react';

class ScalePage extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/scale-page/index.tsx');
    return (
      <div>
        <h1>Scale Page</h1>
      </div>
    );
  }
}

export default ScalePage;
