import { AxiosPromise } from "axios";
import { OperationResult } from "../../index";

export interface IListDataService {
    list<T>(): AxiosPromise<OperationResult<T[]>>;
}