import {
  Controller,
  Get,
  ParseIntPipe,
  Query,
  UseGuards,
  UsePipes,
  ValidationPipe,
} from '@nestjs/common';
import { AuthGuard } from '../auth/auth.guard';
import { ContactService } from './contact.service';
import { ContactResponse } from './entities/ContactResponse';

@UseGuards(AuthGuard)
@Controller('contact')
export class ContactController {
  constructor(private contact: ContactService) {}
  @Get()
  @UsePipes(ValidationPipe)
  public async findGetByAll(
    @Query('page', ParseIntPipe) page: number,
    @Query('limit', ParseIntPipe) limit: number,
  ): Promise<ContactResponse[]> {
    return await this.contact.findGetByAll(page, limit);
  }
}
