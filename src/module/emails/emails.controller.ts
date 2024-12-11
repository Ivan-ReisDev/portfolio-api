import { Body, Controller, Post, UseGuards } from '@nestjs/common';
import { EmailsService } from './emails.service';
import { AuthGuard } from '../auth/auth.guard';

@UseGuards(AuthGuard)
@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @Post()
  public async sendEmail(@Body('email') email: string) {
    await this.emailsService.sendEmail(email);
  }
}
