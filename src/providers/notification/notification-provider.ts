import { NotificationItem } from "../../types/notification-item/notification-item";

export interface INotificationProvider {
    Error(message?: any, dismissAfter?: number): void;
    Success(message?: any, dismissAfter?: number): void;
    Info(message?: any, dismissAfter?: number): void;
    Warning(message?: any, dismissAfter?: number): void;
    Debug(message?: any): void;
    GetNotifications(): NotificationItem[];
}