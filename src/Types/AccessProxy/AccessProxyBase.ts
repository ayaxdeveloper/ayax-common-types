import { IAccessProxyCollection } from "./IAccessProxyCollection";
export abstract class AccessProxyBase {
    writeable: IAccessProxyCollection = {};
    hidden: IAccessProxyCollection = {};
}