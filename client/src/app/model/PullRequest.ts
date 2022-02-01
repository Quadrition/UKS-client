import { Branch } from "./Branch";
import { Issue } from "./Issue";
import { Task } from "./Task";

export class PullRequest extends Task{
    
    name?: string;
    branch?: Branch;
    issues?: Issue[];
}