import { Injectable, UnauthorizedException } from '@nestjs/common';
import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { Bcrypt } from 'src/lib/bcrypt/bcrypt';
import { ConfigService } from '@nestjs/config';
import { AuthResponseDto } from './dtos/auth.response.dto';

@Injectable()
export class AuthService {
  private expirationJwtTime: number;

  constructor(
    private readonly bcrypt: Bcrypt,
    private readonly userService: UsersService,
    private readonly jwtService: JwtService,
    private readonly configService: ConfigService,
  ) {
    this.expirationJwtTime = +this.configService.get<number>(
      'JWT_EXPIRATION_TIME',
    );
  }
  async signIn(data: AuthDto): Promise<AuthResponseDto> {
    const foundUser = await this.userService.findGetByAuth(data.email);

    if (!foundUser) {
      throw new UnauthorizedException('Usuário não existe');
    }

    if (await this.bcrypt.compareHash(data.password, foundUser.password)) {
      const payload = {
        sub: foundUser.id,
        email: foundUser.email,
        role: foundUser.role,
      };
      const token = this.jwtService.sign(payload);
      return {
        id: foundUser.id,
        name: foundUser.name,
        email: foundUser.email,
        role: foundUser.role,
        token,
        expireIn: this.expirationJwtTime,
      };
    }

    throw new UnauthorizedException('Usuário ou senha incorreto');
  }
}
