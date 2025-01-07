import { $Enums } from '@prisma/client';
import {
  IsArray,
  IsEmail,
  IsEnum,
  IsOptional,
  IsString,
} from 'class-validator';

export class User {
  readonly id?: number;

  @IsString()
  public name: string;

  @IsEmail()
  public email: string;

  @IsOptional()
  @IsEnum($Enums.Role)
  public role?: $Enums.Role;

  @IsString()
  public password: string;

  @IsOptional()
  @IsArray()
  public posts?: string[];

  constructor(props: User) {
    Object.assign(this, props);
  }
}
