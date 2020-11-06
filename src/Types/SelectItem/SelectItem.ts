import { Guid } from "../Guid/Guid";

export class SelectItem {
    value: number | Guid | string;
    text: string;
    disabled = false;
    selected = false;
    group: string;
    className: string[];
    loading: boolean;
    constructor(init?: Partial<SelectItem>) {
        if (init) {
            Object.assign(this, init);
        }
        if (!this.value) {
            this.value = this.text;
        }
    }
}