import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { AuthGuard } from '../auth/auth.guard';
import { Public } from 'src/common/decorators/public';

@UseGuards(AuthGuard)
@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post()
  public async sendEmail(@Body('email') email: string) {
    await this.emailsService.sendEmailCurriculum(email);
  }

  @Public()
  @Post('/password')
  public async sendEmailPasswordRecovery(@Body('email') email: string) {
    await this.emailsService.sendEmailPasswordRecovery(email);
  }
}
