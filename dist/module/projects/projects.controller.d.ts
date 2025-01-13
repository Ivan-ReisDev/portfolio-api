import { Project } from './entities/projects';
import { ProjectsService } from './projects.service';
import { ProjectResponse } from './entities/projects.response';
export declare class ProjectsController {
    private readonly projectsService;
    constructor(projectsService: ProjectsService);
    created(project: Project, req: any): Promise<void>;
    findGetByAll(page?: number, limit?: number): Promise<ProjectResponse[]>;
}
