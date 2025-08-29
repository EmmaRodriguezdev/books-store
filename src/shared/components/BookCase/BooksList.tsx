import type { Book } from "../../types/book";

const BookList = ({
  books,
  handleAddToReadingList,
}: {
  books: Book[];
  handleAddToReadingList: (book: Book) => void;
}) => {
  return (
    <ul className="grid grid-cols-[repeat(auto-fit,minmax(300px,1fr))] gap-10 m-[20px_100px]">
      {books.map((book) => (
        <li
          key={book.ISBN}
          className="bg-inherit p-4 flex items-top justify-center gap-10"
        >
          <figure className="w-40 aspect-8/12] flex-shrink-0 shadow-[10px_10px_10px_rgba(0,0,0,0.25)]">
            <img
              src={book.cover}
              className="w-full h-full object-cover rounded-lg"
              alt={book.title}
            />
          </figure>
          <article className="flex flex-col gap-4 my-auto">
            <header>
              <h1 className="text-lg font-bold">{book.title}</h1>
            </header>
            <p>{book.pages} pages</p>
            <footer className="space-y-2">
              <p className="text-yellow-900">Author{book.author.name}</p>
              <button
                onClick={() => handleAddToReadingList(book)}
                className="border border-black rounded-full p-[10px_16px] text-sm font-semibold hover:border-amber-300 transition-colors ease-in-out duration-300 cursor-pointer"
              >
                Add 📚
              </button>
            </footer>
          </article>
        </li>
      ))}
    </ul>
  );
};

export default BookList;
