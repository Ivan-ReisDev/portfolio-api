import { $Enums } from '@prisma/client';
import { IsArray, IsEmail, IsEnum, IsString } from 'class-validator';

export class User {
  readonly id?: number;
  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsEnum($Enums.Role)
  public role: $Enums.Role;

  @IsString()
  public password: string;

  @IsArray()
  public posts?: string[];

  constructor(props: User) {
    Object.assign(this, props);
  }
}
