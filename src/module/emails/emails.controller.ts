import {
  Body,
  Controller,
  HttpCode,
  HttpStatus,
  Post,
  UseGuards,
} from '@nestjs/common';
import { EmailsService } from './emails.service';
import { AuthGuard } from '../auth/auth.guard';
import { Public } from '../../common/decorators/public';
import { EmailRequest } from './domain/dtos/email-request';

@UseGuards(AuthGuard)
@Controller('emails')
export class EmailsController {
  constructor(private readonly emailsService: EmailsService) {}

  @HttpCode(HttpStatus.OK)
  @Post()
  public async sendEmail(@Body('data') data: EmailRequest) {
    await this.emailsService.sendEmailCurriculum(data);
  }

  @Public()
  @Post('/password')
  public async sendEmailPasswordRecovery(@Body('email') email: string) {
    await this.emailsService.sendEmailPasswordRecovery(email);
  }
}
