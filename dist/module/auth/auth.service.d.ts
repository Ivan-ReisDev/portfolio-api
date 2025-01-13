import { UsersService } from '../users/users.service';
import { JwtService } from '@nestjs/jwt';
import { AuthDto } from './dtos/auth.dto';
import { Bcrypt } from 'src/lib/bcrypt/bcrypt';
import { ConfigService } from '@nestjs/config';
import { AuthResponseDto } from './dtos/auth.response.dto';
export declare class AuthService {
    private readonly bcrypt;
    private readonly userService;
    private readonly jwtService;
    private readonly configService;
    private expirationJwtTime;
    constructor(bcrypt: Bcrypt, userService: UsersService, jwtService: JwtService, configService: ConfigService);
    signIn(data: AuthDto): Promise<AuthResponseDto>;
}
