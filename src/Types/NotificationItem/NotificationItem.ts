import { Guid } from "../Guid/Guid";

export class NotificationItem {
    id: string;
    message: any;
    title: string;
    dismissAfter: number;
    color: string;
    icon: string;
    showing: boolean;
    outline: boolean;
    public constructor(message: any, icon: string, color: string, title: string, dismissAfter: number) {
        this.id = Guid.newGuid().toString();
        this.showing = true;
        this.outline = false;
        this.message = message;
        this.icon = icon; 
        this.color = color;
        this.dismissAfter = dismissAfter;
        this.title = title;
    }
}