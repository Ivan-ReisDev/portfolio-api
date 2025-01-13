import { Supabase } from 'src/lib/supabase/supabase';
export declare class UploadsService {
    private readonly supabase;
    constructor(supabase: Supabase);
    upload(file: Express.Multer.File): Promise<string>;
}
