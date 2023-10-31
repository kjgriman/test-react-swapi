import { Suspense } from "react";
import ListItem from "../components/ListItem";
import { fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";
import { useSearch } from "../hooks/search";
import { Categories } from "../enums/categories";
import { usePagination } from "../hooks/pagination";

const apiData = fetchData("https://swapi.dev/api/starships");

export default function StartShipsPage() {
    const data = apiData.read();
    const { onSearchSubmit, onChangeTextSearch, dataFilter, loading, errorMessage, searchRef } = useSearch(Categories.StarShip)
    const { handlerPage, page, isLoading, startShips, errorState } = usePagination(data, Categories.StarShip)


    return (
        <>
        <input
            id="q"
            aria-label="Search Startships"
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
                    <ListItem items={dataFilter} from={Categories.StarShip} />
                )
            ) : (
                <Suspense fallback={<Loading />}>
                    {startShips ? (
                        isLoading ? <Loading /> : <ListItem items={planets} from={Categories.StarShip} />
                    ) : (
                        <ListItem items={data} from={Categories.StarShip} />
                    )}
                    <div className="flex justify-center mt-6">
                        <a
                            onClick={() => handlerPage(-1)}
                            href="#"
                            className="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                            Previous
                        </a>
                        <span className="mx-2">{page}</span> - <b className="ml-2"> {Math.ceil(data?.count / data?.results.length)}</b>
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