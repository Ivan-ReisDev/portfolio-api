import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { emailMarketing } from './templates/email.marketing';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';

@Injectable()
export class EmailsService {
  private emailService: string;

  constructor(
    @Inject('NODEMAILER_TRANSPORT')
    private readonly transporter: nodemailer.Transporter,
    private readonly configService: ConfigService,
  ) {
    this.emailService = this.configService.get<string>('EMAIL');
  }

  public async sendEmail(email: string) {
    const htmlcontent = emailMarketing();
    const mailOptions = {
      from: this.emailService,
      to: email,
      subject: 'Desenvolvedor Full-Stack Currículo',
      text: 'Desenvolvedor Full-Stack Currículo',
      html: htmlcontent,
      attachments: [
        {
          filename: 'IVAN_REIS_CURRICULO.pdf',
          path: path.resolve(
            __dirname,
            '../../../src/pdf/IVAN_REIS_CURRICULO.pdf',
          ),
        },
      ],
    };

    try {
      const info = await this.transporter.sendMail(mailOptions);
      console.log('Email enviado:', info.response);
    } catch (error) {
      console.error('Erro ao enviar e-mail:', error);
      throw new HttpException(
        'Erro interno ao criar e-mail',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
