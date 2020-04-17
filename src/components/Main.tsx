import * as React from "react";
import Task from './Tasks'

export interface IMainProps {}

export default class Main extends React.Component<IMainProps> {
  public render() {
    return (
    <React.Fragment>
        <Task/>
    </React.Fragment>
    );
  }
}
