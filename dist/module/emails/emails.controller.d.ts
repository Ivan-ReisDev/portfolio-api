import { EmailsService } from './emails.service';
export declare class EmailsController {
    private readonly emailsService;
    constructor(emailsService: EmailsService);
    sendEmail(email: string): Promise<void>;
    sendEmailPasswordRecovery(email: string): Promise<void>;
}
