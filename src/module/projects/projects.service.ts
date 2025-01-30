import {
  ConflictException,
  HttpException,
  HttpStatus,
  Injectable,
} from '@nestjs/common';
import { Project } from './entities/projects';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { ProjectResponse } from './entities/projects.response';

@Injectable()
export class ProjectsService {
  constructor(private prisma: PrismaService) {}

  public async created(project: Project, id: number): Promise<void> {
    const data = new Project({
      title: project.title,
      description: project.description,
      userId: id,
      stacks: project.stacks,
      video: project.video,
      image: project.image,
    });

    const existingProject = await this.prisma.projects.findFirst({
      where: {
        title: data.title,
      },
    });

    if (existingProject) {
      throw new ConflictException('Este usuário já existe');
    }

    const result = await this.prisma.projects.create({
      data: {
        title: data.title,
        description: data.description,
        userId: data.userId,
        stacks: data.stacks as object[],
        video: data.video,
        image: data.image,
      },
    });

    if (!result) {
      throw new HttpException(
        'Erro ao criar usuário',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  public async findGetByAll(
    page: number,
    limit: number,
  ): Promise<ProjectResponse[]> {
    const skip = (page - 1) * limit;
    const docs = await this.prisma.projects.findMany({
      skip,
      take: limit,
    });

    const projects = docs.map((project) => {
      return new ProjectResponse(project);
    });

    return projects;
  }
}
