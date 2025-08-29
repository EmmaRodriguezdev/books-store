import { BookCase, ReadingList } from "../shared/components/BookCase";
import { Separator } from "../shared/components/BookCase";
import { BookList } from "../shared/components/BookCase";
import useBooks from "../shared/hooks/useBooks";

function App() {
  const {
    books,
    handleAddToReadingList,
    handleRemoveFromReadingList,
    readingList,
  } = useBooks();

  return (
    <div className="grid grid-rows-[40px_1fr_40px] min-h-screen overflow-x-hidden">
      <header className="font-extrabold text-2xl text-center">
        Books Store 📚
      </header>
      <main className="px-4 md:px-8 lg:px-16 w-full max-w-[1440px] mx-auto mb-2">
        <BookCase>
          <ReadingList
            books={readingList}
            handleRemoveFromReadingList={handleRemoveFromReadingList}
          />
          <figure className="w-80 absolute translate-y-[7em] bg-transparent z-10 left-10 flex flex-col items-center">
            <figcaption className="text-4xl font-bold absolute -top-10 left-10 w-full">
              My Reading List
            </figcaption>
            <img src="/books.png" alt="books" className="" />
          </figure>
          <Separator />
          <BookList
            books={books}
            handleAddToReadingList={handleAddToReadingList}
          />
        </BookCase>
      </main>
      <footer className="font-extrabold text-2xl text-center bg-[#2C1810] text-white">
        With ♥️ EmmaRodriguezdev
      </footer>
    </div>
  );
}

export default App;
