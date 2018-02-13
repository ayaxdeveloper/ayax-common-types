import { guid } from "../..";

export class Dictionary {
    id: number | string | guid;
    name: string;
    order: number;
    disabled: boolean;
    constructor(init?: Partial<Dictionary>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}