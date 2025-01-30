import { Module } from '@nestjs/common';
import { ContactService } from './contact.service';
import { ContactController } from './contact.controller';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';

@Module({
  providers: [ContactService, PrismaService],
  controllers: [ContactController],
  exports: [ContactService],
})
export class ContactModule {}
