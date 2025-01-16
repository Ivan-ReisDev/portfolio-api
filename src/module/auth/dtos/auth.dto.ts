import { IsEmail, IsString } from 'class-validator';
import { ApiProperty } from '@nestjs/swagger';

export class AuthDto {
  @ApiProperty({
    description: 'email do usuário cadastrado',
    example: 'email@email.com',
  })
  @IsEmail()
  public email: string;

  @ApiProperty({
    description: 'Senha de acesso do usuário',
    example: 'senha123',
  })
  @IsString()
  public password: string;

  constructor(props: AuthDto) {
    Object.assign(this, props);
  }
}
