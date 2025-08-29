import type { Book } from "../../types/book";

const ReadingList = ({
  books,
  handleRemoveFromReadingList,
}: {
  books: Book[];
  handleRemoveFromReadingList: (isbn: string) => void;
}) => {
  if (books.length === 0) {
    return (
      <div className="w-full text-center min-h-[20em] flex flex-col justify-center gap-4 ">
        <strong className="text-2xl">My Reading List</strong>
        <p className="text-lg">Your reading list is empty</p>
      </div>
    );
  }

  return (
    <section className="max-w-full flex items-center justify-end gap-4 min-h-[20em] mx-[120px]">
      <ul className="inline-flex gap-10 overflow-x-auto max-w-[40vw]">
        {books.map((book) => (
          <li key={book.ISBN} className="relative group cursor-pointer w-40">
            <figure className="w-40 aspect-[9/12] flex-shrink-0">
              <figcaption className="rotate-90 absolute right-24 inline-block w-full top-20">
                {book.genre}
              </figcaption>
              <img
                src={book.cover}
                alt={book.title}
                className="w-full h-full object-cover rounded-lg"
              />
            </figure>
            <div className="absolute inset-0 flex flex-col items-center justify-center rounded-lg gap-4 bg-black/70 opacity-0 group-hover:opacity-100 transition-opacity ease-in-out duration-300">
              <div className="flex flex-col items-center gap-4">
                <button className="bg-white text-black px-3 py-1 rounded-lg shadow cursor-pointer hover:bg-current/5">
                  Editar
                </button>
                <button
                  className="bg-red-500 text-white px-3 py-1 rounded-lg shadow cursor-pointer hover:bg-current/5"
                  onClick={() => handleRemoveFromReadingList(book.ISBN)}
                >
                  Eliminar
                </button>
              </div>
            </div>
          </li>
        ))}
      </ul>
    </section>
  );
};

export default ReadingList;
