export interface ICrudService {
    Add(dto);
    Get(id);
    Update(dto);
    Delete(id);
}