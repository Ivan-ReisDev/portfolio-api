import { IsDate, IsEmail, IsOptional, IsString } from 'class-validator';

export class Contact {
  @IsOptional()
  @IsString()
  public name?: string;

  @IsEmail()
  public email: string;

  @IsOptional()
  @IsString()
  public phone?: string;

  @IsOptional()
  @IsDate()
  public date?: Date;

  constructor(props: Contact, status: boolean) {
    Object.assign(this, props);
    if (status) {
      this.date = new Date();
    }
  }
}
