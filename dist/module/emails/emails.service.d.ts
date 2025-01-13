import nodemailer from 'nodemailer';
import { ConfigService } from '@nestjs/config';
export declare class EmailsService {
    private readonly transporter;
    private readonly configService;
    private emailService;
    constructor(transporter: nodemailer.Transporter, configService: ConfigService);
    sendEmailCurriculum(email: string): Promise<void>;
    sendEmailPasswordRecovery(email: string): Promise<void>;
    private sendEmail;
}
