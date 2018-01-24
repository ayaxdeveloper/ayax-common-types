export interface INotificationProvider {
    Error(message?: any, dismissAfter?: number);
    Success(message?: any, dismissAfter?: number);
    Info(message?: any, dismissAfter?: number);
    Warning(message?: any, dismissAfter?: number);
    Debug(message?: any);
    GetNotifications(): NotificationItem[];
}