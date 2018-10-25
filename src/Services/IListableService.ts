import { IListItem } from "../Types/List/IListItem";

export interface IListableService {
    List(): Promise<IListItem[]>;
}