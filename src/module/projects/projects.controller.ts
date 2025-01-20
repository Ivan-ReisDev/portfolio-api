import {
  Body,
  Controller,
  Get,
  Post,
  Query,
  Request,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { Project } from './entities/projects';
import { ProjectsService } from './projects.service';
import { ProjectResponse } from './entities/projects.response';
import { ControlleDto } from './dtos/controlle.dto';

@UseGuards(AuthGuard)
@Controller('projects')
export class ProjectsController {
  constructor(private readonly projectsService: ProjectsService) {}

  @UsePipes(ValidationPipe)
  @Post()
  async created(@Body() project: Project, @Request() req) {
    const userId = req.user.sub;
    await this.projectsService.created(project, userId);
  }

  @UsePipes(ValidationPipe)
  @Get()
  public async findGetByAll(
    @Query('page') page: number = 1,
    @Query('limit') limit: number = 10,
  ): Promise<ProjectResponse[]> {
    const newDto = new ControlleDto({ page, limit });
    const projects = await this.projectsService.findGetByAll(
      newDto.page,
      newDto.limit,
    );

    return projects;
  }
}
