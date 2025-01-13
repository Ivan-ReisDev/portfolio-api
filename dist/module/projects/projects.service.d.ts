import { Project } from './entities/projects';
import { PrismaService } from 'src/database/prisma.service';
import { ProjectResponse } from './entities/projects.response';
export declare class ProjectsService {
    private prisma;
    constructor(prisma: PrismaService);
    created(project: Project, id: number): Promise<void>;
    findGetByAll(page: number, limit: number): Promise<ProjectResponse[]>;
}
