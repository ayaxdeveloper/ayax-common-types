import { RouteBreadcrumbMetadata } from "./RouteBreadcrumbMetadata";

export class RouteMetadata {
    access?: string | string[];
    accessStart?: string | string[];
    breadcrumbs: RouteBreadcrumbMetadata[] = [];
    constructor(init?: Partial<RouteMetadata>) {
        if (init) {
            Object.assign(this, init);
        }
    }
}