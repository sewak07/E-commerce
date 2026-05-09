import { Link } from "react-router-dom";
import CategoryNavs from "./CategoryNavs.jsx";

export default function Header() {
  return (
    <header className="w-full h-[70px] px-14 flex items-center justify-between bg-gradient-to-r from-black to-zinc-900 text-white">
      
      {/* Left: Logo */}
      <div className="flex items-center">
        <Link to="/" className="flex items-center gap-2 text-xl font-bold tracking-wide">
          <span className="bg-lime-400 text-black p-2 rounded-full text-sm">
            ⚡
          </span>
          VOLT<span className="text-lime-400">.</span>
        </Link>
      </div>

      {/* Center + Right */}
      <CategoryNavs />

    </header>
  );
}