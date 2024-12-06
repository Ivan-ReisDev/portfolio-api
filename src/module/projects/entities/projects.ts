import {
  IsNumber,
  IsString,
  IsUrl,
  ValidateIf,
  ValidateNested,
} from 'class-validator';
import { Stacks } from '../dtos/stack.dto';
import { Type } from 'class-transformer';

export class Project {
  public readonly id?: number;
  @IsString()
  public title: string;
  @IsString()
  public description: string;
  @ValidateIf((o) => o.userId !== undefined)
  @IsNumber()
  public userId?: number;
  @ValidateNested({ each: true })
  @Type(() => Stacks)
  public stacks: Stacks[];
  @IsUrl()
  public video: string;
  @IsUrl()
  public image: string;

  constructor(props: Project) {
    Object.assign(this, props);
  }
}
