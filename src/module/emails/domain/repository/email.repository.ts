import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/infrastructure/database/prisma/prisma.service';
import { Contact } from 'src/module/contact/entities/Contact';

@Injectable()
export class EmailRepository {
  constructor(private prisma: PrismaService) {}

  async create(request: Contact, status: boolean): Promise<void> {
    const existingContact = await this.prisma.contacts.findUnique({
      where: {
        email: request.email,
      },
    });

    if (!existingContact) {
      return await this.created(request, status);
    } else {
    }
  }

  private async created(request: Contact, status: boolean): Promise<void> {
    const data = new Contact(request, status);

    const contatc = await this.prisma.contacts.create({
      data,
    });

    if (!contatc) {
      throw new HttpException(
        'Erro ao criar contato',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
}
