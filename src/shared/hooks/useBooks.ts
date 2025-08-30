import { useState, useMemo } from "react";
import type { Book, SelectProps } from "../types/book";
import data from "../../../books.json";
import useStore from "../../app/store";
import useDebounce from "../utils/debounce";

export default function useBooks() {
  const { setStore, removeFromStore, books: readingList } = useStore();
  const [allBooks] = useState(
    (data.library as { book: Book }[]).map((item) => item.book)
  );
  const [genre, setGenre] = useState<string>('all');
  const [query, setQuery] = useState<string>("");
  const { debounceValue } = useDebounce(500, query);

  const books = useMemo(() => {
    if (debounceValue) {
      return allBooks.filter(
        (item) =>
          item.title.toLowerCase().includes(debounceValue.toLowerCase()) &&
          !readingList.some((b) => b.ISBN === item.ISBN)
      );
    }
    if (genre !== 'all') {
      return allBooks.filter((item) => item.genre === genre)
    }
    return allBooks.filter(
      (item) => !readingList.some((b) => b.ISBN === item.ISBN)
    );
  }, [allBooks, readingList, debounceValue, genre]);

  const catalogGenres = () => {
    const uniqueGenres: SelectProps[] = []
    allBooks.map((book) => {
      if (!uniqueGenres.some((genre) => genre.value === book.genre)) {
        uniqueGenres.push({ value: book.genre, label: book.genre });
      }
    })

    return uniqueGenres
  }

  const handleAddToReadingList = (book: Book) => {
    setStore(book);
  };

  const handleRemoveFromReadingList = (isbn: string) => {
    removeFromStore(isbn);
  };

  const handleSearch = (query: string) => {
    setQuery(query);
  };

  const handleGenreFilter = (genre: string) => {
    setGenre(genre);
  }

  return {
    books,
    readingList,
    handleAddToReadingList,
    handleRemoveFromReadingList,
    handleSearch,
    catalogGenres,
    handleGenreFilter,
  };
}
