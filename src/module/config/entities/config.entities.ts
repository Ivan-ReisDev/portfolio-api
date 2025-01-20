import { IsString, ValidateNested } from 'class-validator';
import { StackDto } from '../dtos/stacks.dto';
import { Type } from 'class-transformer';

export class ConfigEntities {
  @IsString()
  public name: string;

  @ValidateNested()
  @Type(() => StackDto)
  public stacks: StackDto;

  @IsString()
  public about: string;

  @IsString()
  public linkedin: string;

  @IsString()
  public github: string;

  @IsString()
  public whatsapp: string;
}
