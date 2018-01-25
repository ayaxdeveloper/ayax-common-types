export interface INotificationSettings {
    errorDismiss: number;
    successDismiss: number;
    infoDismiss: number;
    warningDismiss: number;
}

export abstract class BaseNotificationSettings {
    static errorDismiss: number = 10000;
    static successDismiss: number = 1000;
    static infoDismiss: number = 1000;
    static warningDismiss: number = 3000;
    constructor(init?: Partial<BaseNotificationSettings>) {
        if(init) {
            Object.assign(this, init)
        }
    }
}