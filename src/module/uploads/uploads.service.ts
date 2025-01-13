import { Injectable } from '@nestjs/common';
import { Supabase } from '../../lib/supabase/supabase';

@Injectable()
export class UploadsService {
  constructor(private readonly supabase: Supabase) {}
  public async upload(file: Express.Multer.File): Promise<string> {
    const name = file.originalname.replace(/ /g, '-').toLocaleLowerCase();
    const result = await this.supabase.upload(file.buffer, name);
    return result;
  }
}
