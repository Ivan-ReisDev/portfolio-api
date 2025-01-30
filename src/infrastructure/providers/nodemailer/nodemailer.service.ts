import { Injectable, Inject } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
import { MailOptionsDto } from 'src/module/emails/domain/dtos/mailOptions';

@Injectable()
export class NodemailerService {
  private emailService: string;
  constructor(
    @Inject('NODEMAILER_TRANSPORT')
    private readonly transporter: nodemailer.Transporter,
    private readonly configService: ConfigService,
  ) {
    this.emailService = this.configService.get<string>('EMAIL');
  }

  async send(mailOptions: MailOptionsDto) {
    mailOptions.from = this.emailService;
    const info = await this.transporter.sendMail(mailOptions);
    console.log('Email enviado:', info.response);
  }
}
