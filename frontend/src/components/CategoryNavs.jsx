import { Link } from "react-router-dom";

export default function CategoryNavs() {
  return (
    <nav className="flex items-center gap-6 text-sm">

      <div className="hidden md:flex items-center gap-6 text-zinc-600">
        <Link to="/allProducts" className="hover:text-indigo-600 transition">
          Shop
        </Link>
        <Link to="/smartphones" className="hover:text-indigo-600 transition">
          Smartphones
        </Link>
        <Link to="/tablets" className="hover:text-indigo-600 transition">
          Tablets
        </Link>
        <Link to="/audio" className="hover:text-indigo-600 transition">
          Audio
        </Link>
        <Link to="/accessories" className="hover:text-indigo-600 transition">
          Accessories
        </Link>
      </div>

      <Link
        to="/cart"
        className="text-lg text-zinc-600 hover:text-indigo-600 transition"
      >
        👜
      </Link>

      <Link
        to="/signup"
        className="px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-500 transition"
      >
        Sign up
      </Link>

    </nav>
  );
}