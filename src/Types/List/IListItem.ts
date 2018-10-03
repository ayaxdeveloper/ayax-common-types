import { IEntity, Guid } from "../../Types";

export interface IListItem extends IEntity {
    id: number | string | Guid;
    name: string;
    title: string;
    order: number;
    isActive: boolean;
}