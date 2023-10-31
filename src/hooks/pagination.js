
import { useEffect,useState } from "react";
import { getPeople } from "../services/people";
import { getPlanets } from "../services/planets";
import { Categories } from "../enums/categories";
import { getStartShips } from "../services/starships";

export const usePagination = (data,cat)=>{

    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [people, setPeople] = useState(null);
    const [planets, setPlanets] = useState(null);
    const [startShips, setStartShips] = useState(null);
    const [errorState, setErrorState] = useState({ hasError: false });
    const handleError = (err) => {
        setErrorState({ hasError: true, message: err.message });
    };
    
    useEffect(() => {
        if (cat== Categories.People) {
            setLoading(true)
            getPeople(page)
            .then(setPeople)
            .catch(handleError)
            .finally(()=>{
                setLoading(false) 
            });
        }
        if (cat== Categories.Planets) {
            setLoading(true)
            getPlanets(page)
            .then(setPlanets)
            .catch(handleError)
            .finally(()=>{
                setLoading(false) 
            });
        }
        if (cat==Categories.StarShip) {
            setLoading(true)
            getStartShips(page)
            .then(setStartShips)
            .catch(handleError)
            .finally(()=>{
                setLoading(false) 
            });
        }
    }, [page]);
    
    const handlerPage = (next) => {
        if (!data.previous && page + next <= 0) return;
        if (!data.next && page + next >= 4) return;

        setPage(page + next);
    };

    return {handlerPage,page,planets,startShips, isLoading,people,errorState}
}