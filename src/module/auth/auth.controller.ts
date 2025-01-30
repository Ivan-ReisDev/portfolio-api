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

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}
  @Public()
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  @Post('/login')
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

  @Post('/logout')
  @HttpCode(HttpStatus.OK)
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
