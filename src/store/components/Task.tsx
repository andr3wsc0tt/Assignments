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
    removeTask: typeof removeTask
}

export interface ITaskAppState {
    addValue : string,
    removeValue : string
}
export class TaskApp extends React.Component<ITaskAppProps, ITaskAppState> {
  
    constructor(props: ITaskAppProps){
        super(props);
        this.state = {addValue: "", removeValue: ""};
    }

    handleAdd = (e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        let {addValue} = this.state;
        let {taskNum, addTask, removeTask} = this.props;


        addTask({id:taskNum, name:addValue});
    }
    handleRemove = (e : React.FormEvent<HTMLFormElement> ) => {
        e.preventDefault();
        let {removeValue} = this.state;
        let {taskNum, removeTask} = this.props;

        removeTask(Number(removeValue));
    }

    handleAddChange = (e : React.FormEvent<HTMLInputElement> ) => {
        this.setState({addValue : e.currentTarget.value})
    }

    handleRemoveChange = (e : React.FormEvent<HTMLInputElement> ) => {
        this.setState({removeValue : e.currentTarget.value})
    }

    public render() {
        let {tasks, taskNum} = this.props;
    return (
        <>
            <form onSubmit = {this.handleAdd}>
            <input type="text" value={this.state.addValue} onChange={this.handleAddChange}/>
            <input type="submit" value="Add"/>
            </form>

            <form onSubmit = {this.handleRemove}>
            <input type="text" value={this.state.removeValue} onChange={this.handleRemoveChange}/>
            <input type="submit" value="Remove"/>
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
    {addTask, removeTask},
)(TaskApp);
