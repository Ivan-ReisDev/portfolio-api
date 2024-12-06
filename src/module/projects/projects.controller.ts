import {
  Body,
  Controller,
  Post,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Project } from './entities/projects';
import { ProjectsService } from './projects.service';

@UseGuards(AuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() project: Project, @Request() req) {
    const userId = req.user.sub;
    await this.projectsService.created(project, userId);
  }
}
