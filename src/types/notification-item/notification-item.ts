import { guid } from "../guid/guid";

export class NotificationItem {
    id: string;
    message: any;
    dismissAfter: number;
    color: string;
    icon: string;
    showing: boolean;
    outline: boolean;
    public constructor(message: any, icon: string, color: string, dismissAfter: number) {
        this.id = guid.newGuid().toString();
        this.showing = true;
        this.outline = false;
        this.message = message;
        this.icon = icon; 
        this.color = color;
        this.dismissAfter = dismissAfter;
    }
}