import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../store'
import {Task} from '../types/types'
import {addTask, removeTask} from '../actions/actions'
import {Card, Grid} from 'semantic-ui-react';

export interface ITaskAppProps {
    tasks: Task[],
    addTask: typeof addTask,
    taskNum: number
    // addTask: typeof addTask,
    // removeTask: typeof removeTask
}

export interface ITaskAppState {
    value : string 
}
export class TaskApp extends React.Component<ITaskAppProps, ITaskAppState> {
  
    constructor(props: ITaskAppProps){
        super(props);
        this.state = {value: ""};
    }

    handleSubmit = (e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        let {value} = this.state;
        let {taskNum, addTask} = this.props;


        addTask({id:taskNum, name:value});
    }

    handleChange = (e : React.FormEvent<HTMLInputElement> ) => {
        this.setState({value : e.currentTarget.value})
    }

    public render() {
        let {tasks, taskNum} = this.props;
    return (
        <>
            <form onSubmit = {this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </form>
          {tasks != null ? tasks.map(task => {
              return <Card>
                  <Card.Header>
                      {task.id}
                  </Card.Header>
                  <Card.Content>
                      {task.name}
                  </Card.Content>
              </Card>
          }) : <h1> No Tasks </h1>}
          </>
    );
  }
}

const mapStateToProps = (state : RootState) => {
    return {
        tasks: state.taskReduce.tasks,
        taskNum: state.taskReduce.taskNum
    };
}

export default connect (
    mapStateToProps,
    {addTask},
)(TaskApp);
