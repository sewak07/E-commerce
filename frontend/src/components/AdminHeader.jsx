import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="w-full bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">

        {/* Left: Logo + Panel name */}
        <div className="flex flex-col sm:flex-row sm:items-center sm:gap-6 gap-1">

          <Link
            to="/admin-dashboard"
            className="flex items-center gap-1 text-xl font-semibold tracking-wide"
          >
            <span className="text-indigo-500 text-2xl">⚡</span>
            <span className="text-white">VOLT</span>
            <span className="text-indigo-500">Store</span>
          </Link>

          <span className="text-sm text-gray-400 sm:border-l sm:border-gray-700 sm:pl-4">
            Admin Dashboard
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center">

          {/* Desktop button */}
          <Link
            to="/admin-addProduct"
            className="hidden sm:inline-flex px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium
                       hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            + Add Product
          </Link>

          {/* Mobile icon button */}
          <Link
            to="/admin-addProduct"
            className="sm:hidden inline-flex items-center justify-center w-10 h-10 rounded-lg bg-indigo-600 text-white
                       hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            +
          </Link>

        </div>

      </div>
    </header>
  );
}