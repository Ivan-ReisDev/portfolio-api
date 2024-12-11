import { Module } from '@nestjs/common';
import { EmailsController } from './emails.controller';
import { EmailsService } from './emails.service';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [EmailsController],
  providers: [
    EmailsService,
    {
      provide: 'NODEMAILER_TRANSPORT',
      useFactory: (configService: ConfigService) => {
        const email = configService.get<string>('EMAIL');
        const password = configService.get<string>('EMAIL_PASS');
        return nodemailer.createTransport({
          service: 'gmail',
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
