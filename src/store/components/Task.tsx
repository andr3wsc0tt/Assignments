import * as React from 'react';
import {connect} from 'react-redux';
import {RootState} from '../../store'
import {Task} from '../types/types'
import {addTask, removeTask} from '../actions/actions'
import {Card, Grid} from 'semantic-ui-react';

export interface ITaskAppProps {
    tasks?: Task[]
    addTask: typeof addTask
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
        let {addTask} = this.props;

        addTask({id:2, name:value});
    }

    handleChange = (e : React.FormEvent<HTMLInputElement> ) => {
        this.setState({value : e.currentTarget.value})
    }

    public render() {
        let {tasks} = this.props;
    return (
        <>
            <form onSubmit = {this.handleSubmit}>
            <input type="text" value={this.state.value} onChange={this.handleChange}/>
            </form>
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
    {addTask},
)(TaskApp);
