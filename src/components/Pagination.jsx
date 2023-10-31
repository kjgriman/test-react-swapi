import { useState } from "react"

export default function Pagination() {

    const [page, setPage] = useState(1);

    const handlerPage = (next) => {
        if (!people.previous && page + next <= 0) return;
        if (!people.next && page + next >= 9) return;
    
        setPage(page + next);
      };
    return (
        <div class="flex justify-center mt-6">
            <a
                onClick={handlerPage(-1)}
                href="#"
                class="flex items-center justify-center px-3 h-8 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Previous
            </a>
            {page}
            <a
                onClick={handlerPage(+1)}
                href="#"
                class="flex items-center justify-center px-3 h-8 ml-3 text-sm font-medium text-gray-500 bg-white border border-gray-300 rounded-lg hover:bg-gray-100 hover:text-gray-700 dark:bg-gray-800 dark:border-gray-700 dark:text-gray-400 dark:hover:bg-gray-700 dark:hover:text-white">
                Next
            </a>
        </div>
    )
}