export function AccessProxyPropertyDecorator(target: any, propertyKey: string) : any {
    return {
        set (value) {
            if (value && typeof value.value !== "undefined") {
                this[`__${propertyKey}_behavior`] = value.behavior;
                this[`__${propertyKey}`] = value.value;
            } else {
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