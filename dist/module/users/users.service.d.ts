import { PrismaService } from 'src/database/prisma.service';
import { User } from './entities/user';
import { Bcrypt } from 'src/lib/bcrypt/bcrypt';
import { UserResponse } from './entities/user.response';
export declare class UsersService {
    private prisma;
    private bcrypt;
    constructor(prisma: PrismaService, bcrypt: Bcrypt);
    create(user: User): Promise<void>;
    findGetByAll(page: number, limit: number): Promise<UserResponse[]>;
    findGetByEmail(email: string): Promise<UserResponse>;
    findGetByAuth(email: string): Promise<User>;
}
