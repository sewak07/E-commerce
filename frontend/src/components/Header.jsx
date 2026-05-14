import { Link } from "react-router-dom";
import CategoryNavs from "./CategoryNavs.jsx";

export default function Header() {
  return (
    <header className="w-full bg-white border-b border-zinc-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 h-16 flex items-center justify-between">

        {/* Logo */}
        <Link
          to="/"
          className="flex items-center gap-1 text-xl font-semibold tracking-wide"
        >
          <span className="text-indigo-500 text-2xl">⚡</span>
          <span className="text-black">VOLT</span>
          <span className="text-indigo-500">Store</span>
        </Link> 
        <CategoryNavs />

      </div>
    </header>
  );
}