import {
  Body,
  Controller,
  Get,
  Param,
  ParseIntPipe,
  Post,
  Query,
  Req,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { UsersService } from './users.service';
import { User } from './entities/user';
import { UserResponse } from './entities/user.response';
import { AuthGuard } from '../auth/auth.guard';
import { Public } from '../../common/decorators/public';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('users')
export class UsersController {
  constructor(private usersService: UsersService) {}

  @Public()
  @UsePipes(ValidationPipe)
  @Post()
  @ApiBody({
    type: User,
    description: 'Cria um novo usuário',
  })
  @ApiResponse({
    status: 201,
    description: 'Post criado com sucesso',
  })
  public async create(@Body() data: User) {
    return this.usersService.create(data);
  }

  @Get('/profile')
  @ApiResponse({
    status: 200,
    description: 'Perfil do usuário de acordo com o token JWT enviado.',
    type: UserResponse,
  })
  public async currentProfile(@Req() request: Request): Promise<UserResponse> {
    const { email: userEmail } = request['user'];
    return await this.usersService.findGetByEmail(userEmail);
  }

  @Get()
  @ApiResponse({
    status: 200,
    description: 'Lista de usuários',
    type: [UserResponse],
  })
  public async findGetAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<UserResponse[]> {
    const users = await this.usersService.findGetByAll(page, limit);
    return users;
  }

  @Get('/:email')
  @ApiResponse({
    status: 200,
    description: 'Perfil do usuário escolhido pelo e-mail',
    type: UserResponse,
  })
  public async findGetByEmail(
    @Param('email') email: string,
  ): Promise<UserResponse> {
    return await this.usersService.findGetByEmail(email);
  }
}
