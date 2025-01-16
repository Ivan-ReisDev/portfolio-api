import { Module } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { ContactModule } from '../contact/contact.module';

@Module({
  controllers: [EmailsController],
  imports: [ContactModule],
  providers: [
    EmailsService,
    {
      provide: 'NODEMAILER_TRANSPORT',
      useFactory: (configService: ConfigService) => {
        const email = configService.get<string>('EMAIL_AWS');
        const password = configService.get<string>('EMAIL_PASS_AWS');
        return nodemailer.createTransport({
          host: 'email-smtp.sa-east-1.amazonaws.com',
          port: 587,
          secure: false,
          auth: {
            user: email,
            pass: password,
          },
        });
      },
      inject: [ConfigService],
    },
  ],

  exports: ['NODEMAILER_TRANSPORT'],
})
export class EmailsModule {}
