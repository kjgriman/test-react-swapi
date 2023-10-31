import { useRef, useState } from 'react';
import searchByCategory from '../services/people'

export function useSearch(categorie){
    const searchRef = useRef(null);
    const [textSeacrh, setTextSearch] = useState('')
    const [dataFilter, setDataFilter] = useState(null)
    const [loading, setLoading] = useState(false)
    const [errorMessage, setErrorMessage] = useState({ hasError: false })

    const onChangeTextSearch = (event) => {
        event.preventDefault();
        const text = searchRef.current.value
        setTextSearch(text)
    }
    
    const onSearchSubmit = (event) => {
        if (event.key !== 'Enter') return;
        setLoading(true)
        searchByCategory(textSeacrh,categorie)
            .then((result) => {
                if (result.results.length == 0) setErrorMessage({ hasError: true, message: err.message })
                else setErrorMessage({ hasError: false})
                setDataFilter(result)
            }).catch((e) => {
                console.log(e);
            }).finally(() => {
                setLoading(false)
            })
    }

    return {onSearchSubmit, onChangeTextSearch, dataFilter, loading, errorMessage,searchRef}

}