import { NotificationItem } from "../Types/NotificationItem/NotificationItem";
import { INotificationProvider } from "./INotificationProvider";
export class DefaultNotificationProvider implements INotificationProvider {
    constructor() {
        console.warn("Используется NotificationProvider. Все нотификации будут выведены только в консоль");
    }
    notifications;    
    Error(message?: any, title?: string, dismissAfter?: number): void {
        console.error(`${title} ${message}`);
    }
    Success(message?: any, title?: string, dismissAfter?: number): void {
        console.log(`${title} ${message}`)
    }
    Info(message?: any, title?: string, dismissAfter?: number): void {
        console.debug(`${title} ${message}`);
    }
    Warning(message?: any, title?: string, dismissAfter?: number): void {
        console.warn(`${title} ${message}`);
    }
    Debug(message?: any): void {
        console.debug(`${message}`);
    }
    GetNotifications(): NotificationItem[] {
        return [];
    }
}