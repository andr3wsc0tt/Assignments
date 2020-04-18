/* -------------- Task HW ------------------ */

export interface Task {
    id: number,
    name: string
}

export interface TaskState {
    tasks: Task[],
    taskNum: number
}

export const REMOVE_TASK = 'REMOVE_TASK';
export const ADD_TASK = 'ADD_TASK';

interface RemoveTask {
    type: typeof REMOVE_TASK,
    payload: number
}

interface AddTask {
    type: typeof ADD_TASK,
    payload: Task
}

export type TaskActionTypes = AddTask | RemoveTask;