import { Link } from "react-router-dom";

export default function AdminHeader() {
  return (
    <header className="w-full bg-gray-900 border-b border-gray-800 sticky top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

        {/* Left: Logo + Panel name */}
        <div className="flex items-center gap-6">
          <Link
            to="/admin-dashboard"
            className="flex items-center gap-1 text-xl font-semibold tracking-wide"
          >
            <span className="text-indigo-500 text-2xl">⚡</span>
            <span className="text-white">VOLT</span>
            <span className="text-indigo-500">Store</span>
          </Link>

          <span className="text-sm text-gray-400 border-l border-gray-700 pl-4">
            Admin Dashboard
          </span>
        </div>

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <Link
            to="/admin-addProduct"
            className="px-4 py-2 rounded-lg bg-indigo-600 text-white text-sm font-medium
                       hover:bg-indigo-500 transition focus:outline-none focus:ring-2 focus:ring-indigo-600"
          >
            + Add Product
          </Link>
        </div>

      </div>
    </header>
  );
}