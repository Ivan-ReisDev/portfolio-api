import {
  ConflictException,
  Injectable,
  NotFoundException,
} from '@nestjs/common';
import { PrismaService } from '../../database/prisma.service';
import { User } from './entities/user';
import { Bcrypt } from '../../lib/bcrypt/bcrypt';
import { UserResponse } from './entities/user.response';

@Injectable()
export class UsersService {
  constructor(
    private prisma: PrismaService,
    private bcrypt: Bcrypt,
  ) {}

  async create(user: User): Promise<void> {
    const newUser = new User(user);
    const existingUser = await this.prisma.user.findUnique({
      where: {
        email: newUser.email,
      },
    });

    if (existingUser) {
      throw new ConflictException('Este usuário já existe');
    }

    const hash = await this.bcrypt.generateHash(newUser.password);

    const data = {
      name: newUser.name,
      email: newUser.email,
      role: newUser.role,
      password: hash,
      posts: newUser.posts,
    };

    await this.prisma.user.create({
      data,
    });
  }

  async findGetByAll(page: number, limit: number): Promise<UserResponse[]> {
    const skip = (page - 1) * limit;
    const docs = await this.prisma.user.findMany({
      skip,
      take: limit,
    });

    const userResponse = docs.map((user) => {
      return new UserResponse(user);
    });

    return userResponse;
  }

  async findGetByEmail(email: string): Promise<UserResponse> {
    const user = await this.prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      throw new NotFoundException('Usuário não existe');
    }

    const filterUser = new UserResponse(user);

    return filterUser;
  }

  async findGetByAuth(email: string): Promise<User> {
    const user = await this.prisma.user.findUnique({ where: { email } });
    return new User(user);
  }
}
