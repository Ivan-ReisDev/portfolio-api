import { Controller, Post, UsePipes, ValidationPipe } from '@nestjs/common';
import { ConfigEntities } from './entities/config.entities';

@Controller('config')
export class ConfigController {
  @Post()
  @UsePipes(ValidationPipe)
  public async created(data: ConfigEntities) {}
}
