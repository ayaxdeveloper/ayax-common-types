import { Guid } from "../Guid/Guid";

export class SelectItem {
    value: number | Guid | string;
    text: string;
    disabled = false;
    selected = false;
    filters: Array<{filterName: string, filterValue: any}>;
    constructor(init?: Partial<SelectItem>) {
        if (init) {
            Object.assign(this, init);
        }
        if (!this.value) {
            this.value = this.text;
        }
    }
}