import { Categories } from "../enums/categories";
import { _handleError, _throwSpecificError } from "../utils/handlerErrors";
const URL_API ='https://swapi.dev/api'


export async function getPlanets(page = 1) {
    try {
        const response = await fetch(`${URL_API}/${Categories.Planets}/?page=${page}`);
        if (!response.ok) {
            return _handleError(response.status);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        _throwSpecificError(err);
    }
}
