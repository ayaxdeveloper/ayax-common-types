import { NotificationItem } from "../Types/NotificationItem/NotificationItem";

export interface INotificationProvider {
    notifications: NotificationItem[];
    Error(message?: any, title?: string, dismissAfter?: number, onClick?: () => void, closeAfterClick?: boolean): void;
    Success(
        message?: any,
        title?: string,
        dismissAfter?: number,
        onClick?: () => void,
        closeAfterClick?: boolean,
    ): void;
    Info(message?: any, title?: string, dismissAfter?: number, onClick?: () => void, closeAfterClick?: boolean): void;
    Warning(
        message?: any,
        title?: string,
        dismissAfter?: number,
        onClick?: () => void,
        closeAfterClick?: boolean,
    ): void;
    Debug(message?: any): void;
    GetNotifications(): NotificationItem[];
}
