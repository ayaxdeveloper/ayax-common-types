import { Guid } from "../..";

export class Dictionary {
    id: number | string | Guid;
    name: string;
    order: number;
    isActive = true;
    notes: string;
    constructor(init?: Partial<Dictionary>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}