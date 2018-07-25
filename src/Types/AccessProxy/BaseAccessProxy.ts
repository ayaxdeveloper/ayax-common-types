import { PropertyBehavior } from "./../PropertyProxy/PropertyBehavior";
export abstract class BaseAccessProxy {
    public Hidden(key: string) : boolean {
        return this[`__${key}_behavior`] ? (this[`__${key}_behavior`] & (PropertyBehavior.Visible | PropertyBehavior.Writable)) === 0 : false;
    }

    public Writeable(key: string) : boolean {
        return this[`__${key}_behavior`] ? (this[`__${key}_behavior`] & PropertyBehavior.Writable) > 0 : false;
    }
}