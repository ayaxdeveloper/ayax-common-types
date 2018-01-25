import { IServerSettings } from "./server-settings";
import { IClientSettings } from "./client-settings";
import { INotificationSettings } from "./notification-settings";
import { BaseNotificationSettings } from "../index";

export interface IAppSettings {
    Server(): IServerSettings;
    Client(): IClientSettings;
    Notification(): INotificationSettings;
    Custom(): {[name: string] : any};
}

export abstract class BaseAppSettings {
    static Notification: BaseNotificationSettings;
}