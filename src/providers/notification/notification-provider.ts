import { NotificationItem } from "../../types/notification-item/notification-item";

export interface INotificationProvider {
    notifications: NotificationItem[];
    Error(message?: any, title?: string, dismissAfter?: number): void;
    Success(message?: any, title?: string, dismissAfter?: number): void;
    Info(message?: any, title?: string, dismissAfter?: number): void;
    Warning(message?: any, title?: string, dismissAfter?: number): void;
    Debug(message?: any): void;
    GetNotifications(): NotificationItem[];
}