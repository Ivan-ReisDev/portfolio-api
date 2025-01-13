import { ConfigService } from '@nestjs/config';
export declare class Supabase {
    private readonly configService;
    private supabaseUrl;
    private supabaseKey;
    private supabase;
    constructor(configService: ConfigService);
    upload(buffer: Buffer<ArrayBufferLike>, name: string): Promise<string>;
}
