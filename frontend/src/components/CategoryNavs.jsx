import { Link } from "react-router-dom";

export default function CategoryNavs() {
  return (
    <nav className="flex items-center gap-12">

      {/* Center: Categories */}
      <div className="flex items-center gap-10 text-sm text-zinc-300">
        <Link to="/allProducts" className="hover:text-lime-400 transition">
          Shop
        </Link>
        <Link to="/mobile" className="hover:text-lime-400 transition">
          Mobile
        </Link>
        <Link to="/tablet" className="hover:text-lime-400 transition">
          Tablet
        </Link>
        <Link to="/audio" className="hover:text-lime-400 transition">
          Audio
        </Link>
        <Link to="/accessories" className="hover:text-lime-400 transition">
          Accessories
        </Link>
      </div>

      {/* Right: Cart and signup */}
      <div className="text-xl cursor-pointer hover:text-lime-400 transition">
        <Link to="/cart">👜</Link>
        <Link to="/signup">Signup</Link>
      </div>
    </nav>
  );
}