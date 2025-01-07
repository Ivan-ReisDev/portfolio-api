import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthDto } from './dtos/auth.dto';
import { AuthResponseDto } from './dtos/auth.response.dto';
import { AuthService } from './auth.service';
import { AuthGuard } from './auth.guard';
import { Public } from 'src/common/decorators/public';

@UseGuards(AuthGuard)
@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Public()
  @HttpCode(HttpStatus.OK)
  @UsePipes(ValidationPipe)
  @Post('/login')
  public async signIn(@Body() auth: AuthDto): Promise<AuthResponseDto> {
    return await this.authService.signIn(auth);
  }
}
