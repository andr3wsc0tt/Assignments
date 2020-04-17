import * as React from 'react';
import Main from './components/Main'

export interface IAppProps {
}

export default class App extends React.Component<IAppProps> {
  public render() {
    return (
      <Main/>
    );
  }
}
