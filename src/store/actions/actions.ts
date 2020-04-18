import {TaskActionTypes, ADD_TASK, REMOVE_TASK, Task} from '../types/types'

/*------------------ Task HW -------------------*/

export function addTask(task: Task) : TaskActionTypes {
    return {
        type: ADD_TASK,
        payload: task
    }
}

export function removeTask(id: number) : TaskActionTypes {
    return {
        type: REMOVE_TASK,
        payload: id
    }
}