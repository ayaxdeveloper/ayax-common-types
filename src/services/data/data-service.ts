import { ICrudDataService } from "./crud-data-service";
import { IListDataService } from "./list-data-service";
import { ISearchDataService } from "./search-data-service";

export interface IDataService extends ICrudDataService, IListDataService, ISearchDataService {
    
}