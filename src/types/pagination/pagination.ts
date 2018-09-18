import { IPagination } from "./IPagination";

export class Pagination implements IPagination {
    page: number;
    totalItems: number;
    perPage: number;
    constructor(init?: Partial<Pagination>) {
        if (init) {
            Object.assign(this, init); 
        }
    }

    static Default(perPage: number) {
        return new Pagination({page: 1, perPage, totalItems: 0 });
    }
}