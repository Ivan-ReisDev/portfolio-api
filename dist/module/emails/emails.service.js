"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
var __param = (this && this.__param) || function (paramIndex, decorator) {
    return function (target, key) { decorator(target, key, paramIndex); }
};
var _a;
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsService = void 0;
const common_1 = require("@nestjs/common");
const nodemailer_1 = require("nodemailer");
const email_marketing_1 = require("./templates/email.marketing");
const path = require("path");
const config_1 = require("@nestjs/config");
const password_recovery_1 = require("./templates/password.recovery");
let EmailsService = class EmailsService {
    constructor(transporter, configService) {
        this.transporter = transporter;
        this.configService = configService;
        this.emailService = this.configService.get('EMAIL');
    }
    async sendEmailCurriculum(email) {
        const htmlcontent = (0, email_marketing_1.emailMarketing)();
        const mailOptions = {
            from: this.emailService,
            to: email,
            subject: 'Desenvolvedor Full-Stack Currículo',
            text: 'Desenvolvedor Full-Stack Currículo',
            html: htmlcontent,
            attachments: [
                {
                    filename: 'IVAN_REIS_CURRICULO.pdf',
                    path: path.resolve(__dirname, '../../../src/pdf/IVAN_REIS_CURRICULO.pdf'),
                },
            ],
        };
        await this.sendEmail(mailOptions);
    }
    async sendEmailPasswordRecovery(email) {
        const htmlcontent = (0, password_recovery_1.passwordRecovery)();
        const mailOptions = {
            from: this.emailService,
            to: email,
            subject: 'Recuperação de senha',
            text: 'Recuperação de senha',
            html: htmlcontent,
        };
        await this.sendEmail(mailOptions);
    }
    async sendEmail(mailOptions) {
        try {
            const info = await this.transporter.sendMail(mailOptions);
            console.log('Email enviado:', info.response);
        }
        catch (error) {
            console.error('Erro ao enviar e-mail:', error);
            throw new common_1.HttpException('Erro interno ao criar e-mail', common_1.HttpStatus.INTERNAL_SERVER_ERROR);
        }
    }
};
exports.EmailsService = EmailsService;
exports.EmailsService = EmailsService = __decorate([
    (0, common_1.Injectable)(),
    __param(0, (0, common_1.Inject)('NODEMAILER_TRANSPORT')),
    __metadata("design:paramtypes", [typeof (_a = typeof nodemailer_1.default !== "undefined" && nodemailer_1.default.Transporter) === "function" ? _a : Object, config_1.ConfigService])
], EmailsService);
//# sourceMappingURL=emails.service.js.map