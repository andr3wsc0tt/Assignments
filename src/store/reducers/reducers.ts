import {TaskState, TaskActionTypes, ADD_TASK, REMOVE_TASK} from '../types/types'

/* -------------------- Task HW  ----------------------*/
// Initialize State
const initialTaskState: TaskState = {
    tasks: [
        {
            id: 1,
            name: "Homework"
        },
        {
            id: 2,
            name: "Dishes"
        }
    ]
};

export function taskReducer(state = initialTaskState, action: TaskActionTypes) : TaskState {
    switch(action.type){
        case ADD_TASK:
            return{
                ...state,
                tasks: [...state.tasks, action.payload]
            }
        case REMOVE_TASK:
            return {
                ...state,
                tasks: state.tasks.filter(tasks => tasks.id !== action.payload)
            }
        default:
            return state;
    }
}