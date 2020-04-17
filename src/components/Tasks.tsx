import * as React from 'react';

export interface ITaskProps {
}
export interface ITaskState {
    completed: boolean
}
export default class Task extends React.Component<ITaskProps> {
    constructor(props : ITaskProps){
        super(props);

    }
  public render() {
    return (
      <React.Fragment>
          <section>

          </section>
      </React.Fragment>

    );
  }
}
