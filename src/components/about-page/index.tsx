import * as React from 'react';

class AboutPage extends React.PureComponent<any, any> {
  public render(): (JSX.Element | null) {
    console.log('[render] ./src/components/about-page/index.tsx');
    return (
      <div>
        <h1>About Page</h1>
      </div>
    );
  }
}

export default AboutPage;
