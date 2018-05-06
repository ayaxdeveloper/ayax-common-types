export interface IPagination {
    page: number;
    totalItems: number;
    rowsPerPage: number;
    CheckPageIsOutOfRange(): boolean;
}

export class Pagination implements IPagination {
    page: number;
    totalItems: number;
    rowsPerPage: number;
    constructor(init?: Partial<Pagination>) {
        if(init) {
            Object.assign(this, init); 
        }
    }

    public static Default(rowsPerPage: number) {
        return new Pagination({page: 1, rowsPerPage: rowsPerPage, totalItems: 0 });
    }

    public CheckPageIsOutOfRange(): boolean {
        if(this.page != 1 && this.page * this.rowsPerPage > this.totalItems) {
            this.page = 1;
            return true;
        }
        return false;
    }
}