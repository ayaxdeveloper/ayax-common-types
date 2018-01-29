import { AxiosPromise } from "axios";
import { OperationResult, Operation } from "../../types/operation/operation";

export interface IOperationService {
    get<T>(url: string): AxiosPromise<OperationResult<T>>;
    post<T>(url: string, data: any): AxiosPromise<OperationResult<T>>;
    put<T>(url: string, data: any): AxiosPromise<Operation>;
    delete<T>(url: string): AxiosPromise<Operation>;
    getAsync<T>(url: string): OperationResult<T>;
    postAsync<T>(url: string, data: any): OperationResult<T>;
    putAsync<T>(url: string, data: any): Operation;
    deleteAsync<T>(url: string): Operation;
}