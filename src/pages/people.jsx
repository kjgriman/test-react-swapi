import { Suspense } from "react";
import ListItem from "../components/ListItem"
import Loading from "../components/Loading";
import SearchInput from "../components/search";
import { fetchData } from "../utils/fetchData";
import { useSearch } from "../hooks/search";

const apiData = fetchData("https://swapi.dev/api/people/");

export default function PeoplePage() {
    
    const data = apiData.read();
    const {onSearchSubmit, onChangeTextSearch, dataFilter, loading, errorMessage, searchRef} = useSearch('people')

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
            {errorMessage && errorMessage}
            {dataFilter ? (
                loading ? <Loading /> : (
                    <ListItem items={dataFilter} from='people' />
                )
            ) : (
                <Suspense fallback={<Loading />}>
                    <ListItem items={data} from='people' />
                    {/* <Pagination /> */}
                </Suspense>
            )}
        </>
    )
}