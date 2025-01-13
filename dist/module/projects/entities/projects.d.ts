import { Stacks } from '../dtos/stack.dto';
export declare class Project {
    readonly id?: number;
    title: string;
    description: string;
    userId?: number;
    stacks: Stacks[];
    video: string;
    image: string;
    constructor(props: Project);
}
