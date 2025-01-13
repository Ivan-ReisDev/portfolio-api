import { $Enums } from '@prisma/client';
export declare class User {
    readonly id?: number;
    name: string;
    email: string;
    role?: $Enums.Role;
    password: string;
    posts?: string[];
    constructor(props: User);
}
