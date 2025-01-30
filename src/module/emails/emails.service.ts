import { Injectable } from '@nestjs/common';
import { emailMarketing } from './domain/templates/email.marketing';
import * as path from 'path';
import { passwordRecovery } from './domain/templates/password.recovery';
import { EmailRequest } from './domain/dtos/email-request';
import { Contact } from '../contact/entities/Contact';
import { NodemailerService } from 'src/infrastructure/providers/nodemailer/nodemailer.service';
import { EmailRepository } from './domain/repository/email.repository';

@Injectable()
export class EmailsService {
  constructor(
    private readonly nodemailerService: NodemailerService,
    private readonly emailRepository: EmailRepository,
  ) {}

  public async sendEmailCurriculum(data: EmailRequest) {
    await this.emailRepository.create({ email: data.email } as Contact, true);
    const htmlcontent = emailMarketing();
    const mailOptions = {
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

    await this.nodemailerService.send(mailOptions);
  }

  async sendEmailPasswordRecovery(email: string) {
    const htmlcontent = passwordRecovery();
    const mailOptions = {
      to: email,
      subject: 'Recuperação de senha',
      text: 'Recuperação de senha',
      html: htmlcontent,
    };
    await this.nodemailerService.send(mailOptions);
  }
}
