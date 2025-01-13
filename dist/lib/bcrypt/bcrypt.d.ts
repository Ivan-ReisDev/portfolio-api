export declare class Bcrypt {
    private saltOrRounds;
    generateHash(password: string): Promise<string>;
    compareHash(password: string, passwordDb: string): Promise<boolean>;
}
