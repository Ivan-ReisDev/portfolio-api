import { IsEmail, IsOptional, IsString } from 'class-validator';

export class EmailRequest {
  @IsOptional()
  @IsString()
  public subject: string;

  @IsEmail()
  public email: string;

  constructor(props: EmailRequest) {
    Object.assign(this, props);
  }
}
