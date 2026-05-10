import { Link } from "react-router-dom";
import CategoryNavs from "./CategoryNavs.jsx";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-2 text-lg font-semibold text-zinc-800"
        >
          <span className="bg-indigo-600 text-white px-2 py-1 rounded-md text-sm">
            ⚡
          </span>
          <span className="font-bold">VOLT</span>
          <span className="text-indigo-600 font-bold">Store.</span>
        </Link>

        <CategoryNavs />

      </div>
    </header>
  );
}