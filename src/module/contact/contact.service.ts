import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { PrismaService } from 'src/database/prisma.service';
import { Contact } from './entities/Contact';
import { ContactResponse } from './entities/ContactResponse';

@Injectable()
export class ContactService {
  constructor(private prisma: PrismaService) {}

  public async inicialize(request: Contact, status: boolean): Promise<void> {
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

  public async findGetByAll(
    page: number,
    limit: number,
  ): Promise<ContactResponse[]> {
    const skip = (page - 1) * limit;
    const docs = await this.prisma.contacts.findMany({
      skip,
      take: limit,
    });

    if (docs.length <= 0) {
      throw new HttpException(
        'Nenhum contato encontrado',
        HttpStatus.NOT_FOUND,
      );
    }
    return docs;
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
