/* -------------- Task HW ------------------ */

export interface Task {
    id: number
    name: string
}

export interface TaskState {
    tasks: Task[]
}

export const REMOVE_TASK = 'REMOVE_TASK';
export const ADD_TASK = 'ADD_TASK';

interface AddTask {
    type: typeof REMOVE_TASK,
    payload: number
}

interface RemoveTask {
    type: typeof ADD_TASK,
    payload: Task
}

export type TaskActionTypes = AddTask | RemoveTask;