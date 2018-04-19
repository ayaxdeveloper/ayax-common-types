export class SearchResponse<T> {
    data: T;
    total: number;

    constructor(init?: Partial<SearchResponse<T>>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}
