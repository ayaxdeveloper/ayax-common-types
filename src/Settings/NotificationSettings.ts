import { INotificationSettings } from "./INotificationSettings";

export class NotificationSettings implements INotificationSettings {
    errorDismiss = 10000;
    successDismiss = 1000;
    infoDismiss = 1000;
    warningDismiss = 3000;
    constructor(init?: Partial<NotificationSettings>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}