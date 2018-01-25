export interface INotificationSettings {
    errorDismiss: number;
    successDismiss: number;
    infoDismiss: number;
    warningDismiss: number;
}

export class NotificationSettings implements INotificationSettings {
    errorDismiss: number = 10000;
    successDismiss: number = 1000;
    infoDismiss: number = 1000;
    warningDismiss: number = 3000;
    constructor(init?: Partial<NotificationSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}