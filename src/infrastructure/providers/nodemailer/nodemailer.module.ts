import { Module } from '@nestjs/common';
import { NodemailerService } from './nodemailer.service';
import * as nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';

@Module({
  providers: [
    NodemailerService,
    {
      provide: 'NODEMAILER_TRANSPORT',
      useFactory: (configService: ConfigService) => {
        const email = configService.get<string>('EMAIL');
        const password = configService.get<string>('EMAIL_PASS');
        return nodemailer.createTransport({
          host: 'smtp.gmail.com',
          port: 587,
          secure: false,
          auth: {
            user: email,
            pass: password,
          },
          tls: {
            rejectUnauthorized: false,
          },
        });
      },
      inject: [ConfigService],
    },
  ],
  exports: [NodemailerService],
})
export class NodemailerModule {}
