import * as React from 'react';
import Button from './Button'
import ButtonExampleConditionals from './Button';
import './Tasks.css'

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
          <section className="container">
            <h2>Task Name</h2>
            <ButtonExampleConditionals/>
          </section>
      </React.Fragment>

    );
  }
}
