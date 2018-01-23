export class Dictionary {
    id: number;
    name: string;
    constructor(init?: Partial<Dictionary>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}