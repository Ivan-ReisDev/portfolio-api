import { Module } from '@nestjs/common';
import { UploadsController } from './uploads.controller';
import { UploadsService } from './uploads.service';
import { Supabase } from '../../lib/supabase/supabase';
import { ConfigService } from '@nestjs/config';

@Module({
  controllers: [UploadsController],
  providers: [
    UploadsService,
    {
      provide: Supabase,
      useFactory: (configService: ConfigService) => new Supabase(configService),
      inject: [ConfigService],
    },
  ],
})
export class UploadsModule {}
