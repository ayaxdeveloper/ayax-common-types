import { IPagination } from './IPagination';

export class Pagination implements IPagination {
    page: number;
    totalItems: number;
    rowsPerPage: number;
    constructor(init?: Partial<Pagination>) {
        if(init) {
            Object.assign(this, init); 
        }
    }

    static Default(rowsPerPage: number) {
        return new Pagination({page: 1, rowsPerPage, totalItems: 0 });
    }
}