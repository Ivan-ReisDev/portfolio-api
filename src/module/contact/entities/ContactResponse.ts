export class ContactResponse {
  id: number;
  name?: string;
  email: string;
  phone?: string;
  date?: Date;

  constructor(props: ContactResponse) {
    Object.assign(this, props);
  }
}
