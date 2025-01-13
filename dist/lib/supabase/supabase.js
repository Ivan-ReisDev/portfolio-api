"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Supabase = void 0;
const common_1 = require("@nestjs/common");
const supabase_js_1 = require("@supabase/supabase-js");
class Supabase {
    constructor(configService) {
        this.configService = configService;
        this.supabaseUrl = this.configService.get('SUPABASE_URL');
        this.supabaseKey = this.configService.get('SUPABASE_KEY');
        this.supabase = (0, supabase_js_1.createClient)(this.supabaseUrl, this.supabaseKey, {
            auth: {
                persistSession: false,
            },
        });
    }
    async upload(buffer, name) {
        const result = await this.supabase.storage
            .from('image')
            .upload(name, buffer, {
            upsert: true,
        });
        if (result && result.error === null) {
            return `${this.supabaseUrl}/storage/v1/object/public/${result.data.fullPath}`;
        }
        throw new common_1.HttpException('Erro ao criar upload da imagem', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
    }
}
exports.Supabase = Supabase;
//# sourceMappingURL=supabase.js.map