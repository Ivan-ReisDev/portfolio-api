import { Response } from 'express';
import { AuthDto } from './dtos/auth.dto';
import { AuthResponseDto } from './dtos/auth.response.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    private readonly authService;
    constructor(authService: AuthService);
    signIn(auth: AuthDto, response: Response): Promise<AuthResponseDto>;
    logout(response: Response): Promise<{
        message: string;
    }>;
}
