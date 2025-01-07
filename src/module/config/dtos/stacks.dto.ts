import { IsString } from 'class-validator';

export class StackDto {
  @IsString()
  name: string;
  @IsString()
  logo: string;
  @IsString()
  description: string;
}
