export abstract class SearchRequest {
    page: number;
    perPage: number;  
    constructor(init?: Partial<SearchRequest>) {
        if(init) {
            Object.assign(this, init);
        }
    }
}