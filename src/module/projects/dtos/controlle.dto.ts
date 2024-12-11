import { IsNotEmpty, IsNumber } from 'class-validator';

export class ControlleDto {
  @IsNumber()
  @IsNotEmpty()
  public page: number;

  @IsNumber()
  @IsNotEmpty()
  public limit: number;

  constructor(props: Partial<ControlleDto>) {
    this.page = +props.page || 1; // Define 1 como padrão
    this.limit = +props.limit || 10; // Define 10 como padrão
  }
}
