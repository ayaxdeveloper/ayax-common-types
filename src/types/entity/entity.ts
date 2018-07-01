import { IEntity } from './IEntity';
import { guid } from '../Guid/Guid';

export abstract class Entity implements IEntity {
    id: string | number | guid;    
}