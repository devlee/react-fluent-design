import * as React from 'react';

class LightPage extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/light-page/index.tsx');
    return (
      <div>
        <h1>Light Page</h1>
      </div>
    );
  }
}

export default LightPage;
