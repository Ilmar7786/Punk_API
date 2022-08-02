import { SearchBar } from "./searchBar/SearchBar";

export const Header = () => {
  return (
    <div className="max-w-full justify-center flex mx-auto py-6 px-4 shadow mb-14">
      <SearchBar />
    </div>
  );
};
