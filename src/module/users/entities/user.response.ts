import { $Enums } from '@prisma/client';

export class UserResponse {
  public id: number;

  public name: string;

  public email: string;

  public role: $Enums.Role;

  constructor(props: UserResponse) {
    this.name = props.name;
    this.email = props.email;
    this.role = props.role;
    this.id = props.id;
  }
}
