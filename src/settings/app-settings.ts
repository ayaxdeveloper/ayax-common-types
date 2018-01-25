import { IServerSettings } from "./server-settings";
import { IClientSettings } from "./client-settings";
import { INotificationSettings } from "./notification-settings";

export interface IAppSettings {
    Server(): IServerSettings;
    Client(): IClientSettings;
    Notification(): INotificationSettings;
    Custom(): {[name: string] : any};
}