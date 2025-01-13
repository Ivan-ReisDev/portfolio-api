import { $Enums } from '@prisma/client';
export declare class UserResponse {
    id: number;
    name: string;
    email: string;
    role: $Enums.Role;
    constructor(props: UserResponse);
}
