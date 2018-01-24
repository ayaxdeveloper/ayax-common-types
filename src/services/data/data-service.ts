import { ICrudDataService } from "./crud-data-service";
import { IListDataService } from "./list-data-service";
import { IRawDataService } from "./raw-data-service";
import { ISearchDataService } from "./search-data-service";

export interface IDataService extends ICrudDataService, IListDataService, IRawDataService, ISearchDataService {
    
}