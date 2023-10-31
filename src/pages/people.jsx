import { Suspense, useState } from "react";
import ListItem from "../components/ListItem"
import Loading from "../components/Loading";
import { fetchData } from "../utils/fetchData";
import { useSearch } from "../hooks/search";
import Pagination from "../components/Pagination";
import { useEffect } from "react";
import { getPeople } from "../services/people";

const apiData = fetchData("https://swapi.dev/api/people/");




export default function PeoplePage() {
    const [page, setPage] = useState(1);
    const [isLoading, setLoading] = useState(false);
    const [people, setPeople] = useState(null);
    const [errorState, setErrorState] = useState({ hasError: false });

    const data = apiData.read();
    const { onSearchSubmit, onChangeTextSearch, dataFilter, loading, errorMessage, searchRef } = useSearch('people')
    const handleError = (err) => {
        setErrorState({ hasError: true, message: err.message });
    };

    useEffect(() => {
        setLoading(true)
        getPeople(page)
        .then(setPeople)
        .catch(handleError)
        .finally(()=>{
            setLoading(false) 
        });
    }, [page]);

    const handlerPage = (next) => {
        if (!data.previous && page + next <= 0) return;
        if (!data.next && page + next >= 4) return;

        setPage(page + next);
    };


    return (
        <>
            <input
                id="q"
                aria-label="Search contacts"
                placeholder="Search and press key ENTER"
                type="search"
                name="q"
                onChange={onChangeTextSearch}
                onKeyDown={onSearchSubmit}
                ref={searchRef}
                className="m-4"
            />
            {errorMessage.hasError && <div>{errorMessage.message}</div>}
            {errorState.hasError && <div>{errorState.message}</div>}
            {dataFilter ? (
                loading ? <Loading /> : (
                    <ListItem items={dataFilter} from='people' />
                )
            ) : (
                <Suspense fallback={<Loading />}>
                    {people ? (
                        isLoading ? <Loading />:<ListItem items={people} from='people' />
                    ) : (
                        <ListItem items={data} from='people' />
                    )}
                    <div className="flex justify-center mt-6">
                        <a
                            onClick={() => handlerPage(-1)}
                            href="#"
                            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Previous
                        </a>
                        <span className="mx-2">{page}</span> - <b className="ml-2"> {Math.ceil(data.count / data.results.length)}</b>
                        <a
                            onClick={() => handlerPage(+1)}
                            href="#"
                            className="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Next
                        </a>
                    </div>
                </Suspense>
            )}
        </>
    )
}