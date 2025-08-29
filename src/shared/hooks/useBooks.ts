import { useState, useMemo } from "react";
import type { Book } from "../types/book";
import data from "../../../books.json";
import useStore from "../../app/store";

export default function useBooks() {
  const { setStore, removeFromStore, books: readingList } = useStore();
  const [allBooks] = useState((data.library as { book: Book }[]).map((item) => item.book));

  const books = useMemo(() => {
    return allBooks.filter(
      (item) => !readingList.some((b) => b.ISBN === item.ISBN)
    );
  }, [allBooks, readingList]);

  const handleAddToReadingList = (book: Book) => {
    setStore(book);
  };

  const handleRemoveFromReadingList = (isbn: string) => {
    removeFromStore(isbn);
  };

  return {
    books,
    readingList,
    handleAddToReadingList,
    handleRemoveFromReadingList,
  };
}
