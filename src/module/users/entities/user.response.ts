import { $Enums } from '@prisma/client';
import { ApiProperty } from '@nestjs/swagger';

export class UserResponse {
  @ApiProperty({
    description: 'ID do usuário',
    example: 1,
  })
  public id: number;

  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'Ivan Reis',
  })
  public name: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'email@email.com',
  })
  public email: string;

  @ApiProperty({
    description: 'Função do usuário',
    example: 'User',
    enum: $Enums.Role,
  })
  public role: $Enums.Role;

  constructor(props: UserResponse) {
    this.name = props.name;
    this.email = props.email;
    this.role = props.role;
    this.id = props.id;
  }
}
