import * as React from 'react';

class MotionPage extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/motion-page/index.tsx');
    return (
      <div>
        <h1>Motion Page</h1>
      </div>
    );
  }
}

export default MotionPage;
