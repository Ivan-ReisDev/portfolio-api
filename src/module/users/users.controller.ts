import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user';
import { UserResponse } from './entities/user.response';
import { AuthGuard } from '../auth/auth.guard';
import { Public } from 'src/common/decorators/public';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @UsePipes(ValidationPipe)
  @Post()
  async create(@Body() data: User) {
    return this.usersService.create(data);
  }

  @Get()
  async findGetAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<UserResponse[]> {
    const users = await this.usersService.findGetByAll(page, limit);
    return users;
  }

  @Get('/:email')
  async findGetByEmail(@Param('email') email: string): Promise<UserResponse> {
    return await this.usersService.findGetByEmail(email);
  }
}
