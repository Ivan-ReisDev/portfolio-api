import { Module } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import { ContactModule } from '../contact/contact.module';
import { NodemailerModule } from 'src/infrastructure/providers/nodemailer/nodemailer.module';
import { EmailRepository } from './domain/repository/email.repository';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';

@Module({
  controllers: [EmailsController],
  imports: [ContactModule, NodemailerModule],
  providers: [EmailsService, EmailRepository, PrismaService],
})
export class EmailsModule {}
