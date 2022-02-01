import { Branch } from "./Branch";
import { Project } from "./Project";

export class GitRepo {
    id?: number;
    name?: string;
    branches?: Branch[];
    projects?: Project[];
}