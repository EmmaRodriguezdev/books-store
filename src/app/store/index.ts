import { useEffect, useState } from "react";
import type { Book } from "../../shared/types/book";

const READINGLISTKEY = 'readingList'
export default function useStore() {
    const [books, setBooks] = useState<Book[] | []>([])

    useEffect(() => {
        const currentStore = getStore()
        if (currentStore.length > 0) {
            setBooks(currentStore)
        }
    }, [])

    function getStore() {
        const currentStore = localStorage.getItem(READINGLISTKEY)
        const store = currentStore ? JSON.parse(currentStore) as Book[] : []
        setBooks(store)
        return store
    }

    function setStore(data: Book) {
        const currentStore = localStorage.getItem(READINGLISTKEY)
        const booksInStore = currentStore ? JSON.parse(currentStore) as Book[] : []
        const newStore = [...booksInStore, data]
        setBooks(newStore)
        localStorage.setItem(READINGLISTKEY, JSON.stringify(newStore))
    }

    function removeFromStore(isbn: string) {
        const currentStore = localStorage.getItem(READINGLISTKEY)
        const booksInStore = currentStore ? JSON.parse(currentStore) as Book[] : []
        const newStore = booksInStore.filter(book => book.ISBN !== isbn)
        setBooks(newStore)
        localStorage.setItem(READINGLISTKEY, JSON.stringify(newStore))
    }

    return {
        setStore,
        getStore,
        removeFromStore,
        books
    }
}