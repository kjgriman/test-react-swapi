import { Suspense } from "react";
import ListItem from "../components/ListItem";
import { fetchData } from "../utils/fetchData";
import Loading from "../components/Loading";
import { useSearch } from "../hooks/search";

const apiData = fetchData("https://swapi.dev/api/planets");

export default function PlanetsPage() {
    const data = apiData.read();
    const {onSearchSubmit, onChangeTextSearch, dataFilter, loading, errorMessage, searchRef} = useSearch('planets')

    return (
        <>
            <input
                id="q"
                aria-label="Search planets"
                placeholder="Search and press key ENTER"
                type="search"
                name="q"
                onChange={onChangeTextSearch}
                onKeyDown={onSearchSubmit}
                ref={searchRef}
                className="m-4"
            />
            {errorMessage && errorMessage}
            {dataFilter ? (
                loading ? <Loading /> : (
                    <ListItem items={dataFilter} from='planets' />
                )
            ) : (
                <Suspense fallback={<Loading />}>
                    <ListItem items={data} from='planets' />
                </Suspense>
            )}
        </>
    )
}