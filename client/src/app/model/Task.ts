import { Milestone } from "./Milestone";
import { User } from "./User";

export class Task {
    id?: number;
    events?: Event[];
    milestone?: Milestone;
    creator?: User;
    
}