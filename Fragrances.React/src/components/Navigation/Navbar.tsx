import type { FC } from "react";
import ToolBar from "./ToolBar";
import SearchBar from "./SearchBar";
import AnimatedLogo from "../Animated/AnimatedLogo";

const Navbar: FC = () => {
  return (
    <header className="grid grid-cols-3 items-center px-6 py-5 shadow-md">
      {/* Ліва частина */}
      <div className="flex justify-start">
        <SearchBar />
      </div>

      {/* Лого */}
      <AnimatedLogo />

      {/* Права частина */}
      <div className="flex justify-end">
        <ToolBar />
      </div>
    </header>
  );
};

export default Navbar;
