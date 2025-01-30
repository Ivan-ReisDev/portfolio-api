export class MailOptionsDto {
  public from?: string;
  public to: string;
  public subject: string;
  public text: string;
  public html: string;
  public attachments?: object[];
}
