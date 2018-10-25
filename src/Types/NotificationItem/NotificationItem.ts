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
    onClick: () => void;
    closeAfterClick: boolean;

    public constructor(
        message: any,
        icon: string,
        color: string,
        title: string,
        dismissAfter: number,
        onClick?: () => void,
        closeAfterClick?: boolean
    ) {
        this.id = Guid.newGuid().toString();
        this.showing = true;
        this.outline = false;
        this.message = message;
        this.icon = icon;
        this.color = color;
        this.dismissAfter = dismissAfter;
        this.title = title;
        this.onClick = onClick;
        this.closeAfterClick = closeAfterClick;
    }
}
