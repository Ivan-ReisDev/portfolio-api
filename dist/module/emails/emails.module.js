"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EmailsModule = void 0;
const common_1 = require("@nestjs/common");
const emails_controller_1 = require("./emails.controller");
const emails_service_1 = require("./emails.service");
const nodemailer = require("nodemailer");
const config_1 = require("@nestjs/config");
let EmailsModule = class EmailsModule {
};
exports.EmailsModule = EmailsModule;
exports.EmailsModule = EmailsModule = __decorate([
    (0, common_1.Module)({
        controllers: [emails_controller_1.EmailsController],
        providers: [
            emails_service_1.EmailsService,
            {
                provide: 'NODEMAILER_TRANSPORT',
                useFactory: (configService) => {
                    const email = configService.get('EMAIL');
                    const password = configService.get('EMAIL_PASS');
                    return nodemailer.createTransport({
                        service: 'gmail',
                        auth: {
                            user: email,
                            pass: password,
                        },
                    });
                },
                inject: [config_1.ConfigService],
            },
        ],
        exports: ['NODEMAILER_TRANSPORT'],
    })
], EmailsModule);
//# sourceMappingURL=emails.module.js.map