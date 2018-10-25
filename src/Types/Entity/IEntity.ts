import { Guid } from "../Guid/Guid";

export interface IEntity {
    id: number | Guid | string;
}