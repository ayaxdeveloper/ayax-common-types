import { IAccessProxy } from "./IAccessProxy";
export abstract class BaseAccessProxy {
    _writeable: IAccessProxy = {};
    _hidden: IAccessProxy = {};
}