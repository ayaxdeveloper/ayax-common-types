export class RouteBreadcrumbMetadata {
    text: string;
    route: string;
    constructor(init?: Partial<RouteBreadcrumbMetadata>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}