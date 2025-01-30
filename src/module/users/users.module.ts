import { Module } from '@nestjs/common';
import { UsersController } from './users.controller';
import { UsersService } from './users.service';
import { PrismaService } from '../../infrastructure/database/prisma/prisma.service';
import { Bcrypt } from '../../infrastructure/providers/bcrypt/bcrypt';

@Module({
  controllers: [UsersController],
  providers: [UsersService, PrismaService, Bcrypt],
  exports: [UsersService],
})
export class UsersModule {}
