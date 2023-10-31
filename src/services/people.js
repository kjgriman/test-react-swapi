import axios from "axios";
import { _handleError, _throwSpecificError } from "../utils/handlerErrors";

const searchByCategory = async (name,cat) => {
    const response = await axios.get(`https://swapi.dev/api/${cat}/?search=${name}`);
    return response.data;
}


export async function getPeople(page = 1) {
    try {
        const response = await fetch(`http://swapi.dev/api/people/?page=${page}`);
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