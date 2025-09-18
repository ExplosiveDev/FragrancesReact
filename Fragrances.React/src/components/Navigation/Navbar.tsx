import type { FC } from "react";
import ToolBar from "./ToolBar";
import SearchBar from "./SearchBar";

const Navbar: FC = () => {
  return (
    <header className="grid grid-cols-3 items-center px-6 py-4 shadow-md">
      {/* Ліва частина */}
      <div className="flex justify-start">
        <SearchBar />
      </div>

      {/* Лого */}
      <div className="text-4xl text-center Georgia-TNR">
        Fragrances
      </div>

      {/* Права частина */}
      <div className="flex justify-end">
        <ToolBar />
      </div>
    </header>
  );
};

export default Navbar;
