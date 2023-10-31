import axios from "axios";

const searchByCategory = async (name,cat) => {
    const response = await axios.get(`https://swapi.dev/api/${cat}/?search=${name}`);
    return response.data;
}

export default searchByCategory 