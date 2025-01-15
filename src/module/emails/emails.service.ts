import { HttpException, HttpStatus, Inject, Injectable } from '@nestjs/common';
import nodemailer from 'nodemailer';
import { emailMarketing } from './templates/email.marketing';
import * as path from 'path';
import { ConfigService } from '@nestjs/config';
import { passwordRecovery } from './templates/password.recovery';
import { MailOptionsDto } from './dtos/mailOptions';
import { EmailRequest } from './entities/email-request';
import { ContactService } from '../contact/contact.service';
import { Contact } from '../contact/entities/Contact';

@Injectable()
export class EmailsService {
  private emailService: string;

  constructor(
    @Inject('NODEMAILER_TRANSPORT')
    private readonly transporter: nodemailer.Transporter,
    private readonly configService: ConfigService,
    private readonly contactService: ContactService,
  ) {
    this.emailService = this.configService.get<string>('EMAIL');
  }

  public async sendEmailCurriculum(data: EmailRequest) {
    await this.contactService.inicialize(
      { email: data.email } as Contact,
      true,
    );

    const htmlcontent = emailMarketing();
    const mailOptions = {
      from: this.emailService,
      to: data.email,
      subject: data.subject
        ? data.subject
        : 'Desenvolvedor Full-Stack Currículo',
      text: data.subject ? data.subject : 'Desenvolvedor Full-Stack Currículo',
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

    await this.sendEmail(mailOptions);
  }

  public async sendEmailPasswordRecovery(email: string) {
    const htmlcontent = passwordRecovery();
    const mailOptions = {
      from: this.emailService,
      to: email,
      subject: 'Recuperação de senha',
      text: 'Recuperação de senha',
      html: htmlcontent,
    };
    await this.sendEmail(mailOptions);
  }

  private async sendEmail(mailOptions: MailOptionsDto) {
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
