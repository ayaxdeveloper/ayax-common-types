import { guid } from "../guid/guid";

export interface IEntity {
    id: number | guid | string;
}