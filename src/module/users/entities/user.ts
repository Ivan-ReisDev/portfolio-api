import { $Enums } from '@prisma/client';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class User {
  readonly id?: number;

  @ApiProperty({
    description: 'Nome completo do usuário',
    example: 'Ivan Reis',
  })
  @IsString()
  public name: string;

  @ApiProperty({
    description: 'E-mail do usuário',
    example: 'ivan@email.com',
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    description: 'Função do usuário, se aplicável',
    example: 'Admin',
    enum: $Enums.Role,
    required: false,
  })
  @IsOptional()
  @IsEnum($Enums.Role)
  public role?: $Enums.Role;

  @ApiProperty({
    description: 'Senha do usuário',
    example: 'senha123',
  })
  @IsString()
  public password: string;

  @ApiProperty({
    description: 'Lista de posts do usuário, se houver (opcional)',
    example: ['Post 1', 'Post 2'],
    type: [String],
    required: false,
  })
  @IsOptional()
  @IsArray()
  public posts?: string[];

  constructor(props: User) {
    Object.assign(this, props);
  }
}
