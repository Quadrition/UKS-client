import { Task } from "./Task";

export interface StateChange {
    id?: number;
    creationTime?: Date;
    task?: Task;
    newState?: string;
}