import { PropertyBehavior } from "./PropertyBehavior";
export function AccessProxyPropertyDecorator(target: any, propertyKey: string) : any {
    return {
        set (value) {
            if (value && typeof value.value !== "undefined") {
                this[`${propertyKey}_writeable`] = (value.behavior & PropertyBehavior.Writable) > 0;
                this[`${propertyKey}_hidden`] = (value.behavior & (PropertyBehavior.Visible | PropertyBehavior.Writable)) === 0;
                this[`__${propertyKey}`] = value.value;
            } else {
                this[`${propertyKey}_writeable`] = false;
                this[`${propertyKey}_hidden`] = false;
                this[`__${propertyKey}`] = value;
            }
        },
        get() {
            return this[`__${propertyKey}`];
        },
        enumerable: true,
        configurable: true
    };
}