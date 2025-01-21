import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
  Res,
} from '@nestjs/common';
import { Response } from 'express';
import { AuthDto } from './dtos/auth.dto';
import { AuthResponseDto } from './dtos/auth.response.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from '../../common/decorators/public';
import { ApiBody, ApiResponse } from '@nestjs/swagger';

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  @Post('/login')
  @ApiBody({
    type: AuthDto,
    description: 'Autenticação do usuário',
  })
  @ApiResponse({
    status: 200,
    description: 'Retorna o token de autenticação via cookie httponly',
  })
  public async signIn(
    @Body() auth: AuthDto,
    @Res({ passthrough: true }) response: Response,
  ): Promise<AuthResponseDto> {
    const authResponse = await this.authService.signIn(auth);
    response.cookie('portfolio_auth_token', authResponse?.token, {
      httpOnly: true,
      secure: true,
      maxAge: 259200000,
      sameSite: 'none',
    });
    return authResponse;
  }
//teste
  @Post('/logout')
  @HttpCode(HttpStatus.OK)
  @ApiBody({
    description: 'O body não é necessário',
  })
  @ApiResponse({
    status: 200,
    description: 'limpa o token httpOnly do cookie',
  })
  public async logout(
    @Res({ passthrough: true }) response: Response,
  ): Promise<{ message: string }> {
    response.cookie('portfolio_auth_token', '', {
      httpOnly: true,
      secure: true,
      maxAge: 0,
      sameSite: 'none',
    });

    return { message: 'Logged out successfully' };
  }
}
