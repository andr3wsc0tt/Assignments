import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../store'
import {Task} from '../types/types'
import {addTask, removeTask} from '../actions/actions'
import {Card, Grid} from 'semantic-ui-react';

export interface ITaskAppProps {
    tasks?: Task[]
    // addTask: typeof addTask,
    // removeTask: typeof removeTask
}

export class TaskApp extends React.Component<ITaskAppProps> {
  
    public render() {
        let {tasks} = this.props;
    return (
        <>
          {tasks != null ? tasks.map(task => {
              return <Card>
                  <Card.Header>
                      {task.name}
                  </Card.Header>
              </Card>
          }) : <h1> No Tasks </h1>}
          </>
    );
  }
}

const mapStateToProps = (state : RootState) => {
    return {
        tasks: state.taskReduce.tasks,
    };
}

export default connect (
    mapStateToProps,
    null,
)(TaskApp);
