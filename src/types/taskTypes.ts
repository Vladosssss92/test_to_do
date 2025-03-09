export interface ITask {
    id: string;
    taskName: string;
    taskDescription: string;
    completed: boolean;
    editTask: boolean;
    priority: Priority;
    date: string;
}

export type Priority = 'low' | "medium" | "high"

export interface IStoreTask {
    newTask: ITask[];
}

export interface IRootState {
    tasks: IStoreTask;
}