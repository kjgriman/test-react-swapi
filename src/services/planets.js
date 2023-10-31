import { Categories } from "../enums/categories";
import { _handleError, _throwSpecificError } from "../utils/handlerErrors";


export async function getPlanets(page = 1) {
    try {
        const response = await fetch(`http://swapi.dev/api/${Categories.Planets}/?page=${page}`);
        if (!response.ok) {
            return _handleError(response.status);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        _throwSpecificError(err);
    }
}
