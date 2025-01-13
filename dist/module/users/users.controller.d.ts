import { UsersService } from './users.service';
import { User } from './entities/user';
import { UserResponse } from './entities/user.response';
export declare class UsersController {
    private usersService;
    constructor(usersService: UsersService);
    create(data: User): Promise<void>;
    currentProfile(request: Request): Promise<UserResponse>;
    findGetAll(page: number, limit: number): Promise<UserResponse[]>;
    findGetByEmail(email: string): Promise<UserResponse>;
}
