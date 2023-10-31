export default function SearchInput(props) {
    return (
        <div>
            <input
                {...props}
                id="q"
                aria-label="Search contacts"
                placeholder="Search and press ENTER"
                type="search"
                name="q"
                onChange={props.onChangeTextSearch}
                onKeyDown={props.onSearchSubmit}
                ref={props.searchRef}
                className="m-4"
            />
            <div
                id="search-spinner"
                aria-hidden
                hidden={true}
            />
            <div
                className="sr-only"
                aria-live="polite"
            ></div>
        </div>
    )
}