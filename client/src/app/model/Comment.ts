import { Task } from "./Task";

export class Comment {
  id?: number;
  creationTime?: Date;
  task?: Task;
  content?: string;
}
