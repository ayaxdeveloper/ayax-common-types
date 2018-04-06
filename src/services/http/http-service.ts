import { AxiosPromise } from "axios";

export interface IHttpService {
    baseUrl: string;
    post<T>(relativeUrl: string, data: any): AxiosPromise<T>;
    get<T>(relativeUrl: String): AxiosPromise<T>;
    delete<T>(relativeUrl: String): AxiosPromise<T>;
    put<T>(relativeUrl: String, data: any): AxiosPromise<T>;
}