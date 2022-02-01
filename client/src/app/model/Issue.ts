import { Task } from "./Task";

export class Issue extends Task{
    title?: string;
    description?: string;
    dateCreated?: Date;
}