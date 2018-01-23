import { guid } from "../guid/guid";

export class SelectItem {
    value: number | guid | string;
    text: string;
    disabled: boolean = false;
    selected: boolean = false;
    constructor(init?: Partial<SelectItem>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}