import { useEffect, useState } from "react";

export default function useDebounce(delay: number, query: string) {
    const [debounceValue, setDebounceValue] = useState(query);

    useEffect(() => {

        const handler = setTimeout(() => {
            setDebounceValue(query)
        }, delay)

        return () => clearTimeout(handler)


    }, [query, delay])

    return {
        debounceValue
    }

}