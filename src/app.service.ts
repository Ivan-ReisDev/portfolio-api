import { Injectable } from '@nestjs/common';

@Injectable()
export class AppService {
  getHello(): string {
    return 'Acesse a documentação em /api-docs teste';
  }
}
