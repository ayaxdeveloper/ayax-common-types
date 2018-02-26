import { guid } from "../..";

export class Dictionary {
    id: number | string | guid;
    name: string;
    order: number;
    isActive: boolean = true;
    notes: string;
    constructor(init?: Partial<Dictionary>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}