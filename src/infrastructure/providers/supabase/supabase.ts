import { HttpException, HttpStatus } from '@nestjs/common';
import { ConfigService } from '@nestjs/config';
import { createClient } from '@supabase/supabase-js';
export class Supabase {
  private supabaseUrl: string;
  private supabaseKey: string;
  private supabase;

  constructor(private readonly configService: ConfigService) {
    this.supabaseUrl = this.configService.get<string>('SUPABASE_URL');
    this.supabaseKey = this.configService.get<string>('SUPABASE_KEY');
    this.supabase = createClient(this.supabaseUrl, this.supabaseKey, {
      auth: {
        persistSession: false,
      },
    });
  }

  async upload(buffer: Buffer<ArrayBufferLike>, name: string) {
    const result = await this.supabase.storage
      .from('image')
      .upload(name, buffer, {
        upsert: true,
      });

    if (result && result.error === null) {
      return `${this.supabaseUrl}/storage/v1/object/public/${result.data.fullPath}`;
    }

    throw new HttpException(
      'Erro ao criar upload da imagem',
      HttpStatus.INTERNAL_SERVER_ERROR,
    );
  }
}
