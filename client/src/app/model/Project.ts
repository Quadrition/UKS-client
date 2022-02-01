import { GitRepo } from "./GitRepo";
import { Label } from "./Label";
import { Milestone } from "./Milestone";
import { User } from "./User";

export class Project{
    id?: number;
    title?: string;
    gitRepo?: GitRepo;
    milestones?: Milestone[];
    labesls?: Label[];
    developers?: User[];
    leader?: User;
}