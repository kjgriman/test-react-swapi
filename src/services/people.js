import axios from "axios";
import { _handleError, _throwSpecificError } from "../utils/handlerErrors";
import { Categories } from "../enums/categories";
const URL_API ='https://swapi.dev/api'

const searchByCategory = async (name,cat) => {
    const response = await axios.get(`${URL_API}/${cat}/?search=${name}`);
    return response.data;
}

export const searchById = async (id) => {
    const response = await axios.get(`${URL_API}/${Categories.People}/${id}`);
    return response.data;
}

// export const getImageById = async (id) => {
//     const response = await axios.get(`https://starwars-visualguide.com/assets/img/characters/${id}.jpg`);
//     return response;
// }


export async function getPeople(page = 1) {
    try {
        const response = await fetch(`${URL_API}/${Categories.People}/?page=${page}`);
        if (!response.ok) {
            return _handleError(response.status);
        }
        const data = await response.json();
        return data;
    } catch (err) {
        _throwSpecificError(err);
    }
}

export default searchByCategory 