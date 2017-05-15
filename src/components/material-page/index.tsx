import * as React from 'react';

class MaterialPage extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/material-page/index.tsx');
    return (
      <div>
        <h1>Material Page</h1>
      </div>
    );
  }
}

export default MaterialPage;
