import type { SelectProps } from "../types/book";

const Filters = ({
  handleSearch,
  catalogGenres,
  handleGenreFilter,
}: {
  handleSearch: (query: string) => void;
  catalogGenres: SelectProps[];
  handleGenreFilter: (genre: string) => void;
}) => {
  return (
    <section className="flex items-center gap-4 m-[20px_100px]">
      <div>
        <input
          type="text"
          placeholder="Search by name"
          className="w-full outline-none bg-transparent rounded-xl border p-[6px_8px] focus:border-amber-300 transition-color ease-in-out duration-300"
          onChange={(e) => handleSearch(e.target.value)}
        />
      </div>
      <div className="flex items-center gap-2">
        <select
          onChange={(e) => handleGenreFilter(e.target.value)}
          className="outline-none bg-transparent rounded-xl border p-[6px_8px] focus:border-amber-300 transition-color ease-in-out duration-300 cursor-pointer"
        >
          <option value="all" defaultChecked>
            Genre
          </option>
          {catalogGenres.map((genre) => (
            <option key={genre.value} value={genre.value}>
              {genre.label}
            </option>
          ))}
        </select>
      </div>
    </section>
  );
};

export default Filters;
