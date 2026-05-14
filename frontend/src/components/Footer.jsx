import { Link } from "react-router-dom";
import {
  FiPhone,
  FiMail,
  FiMapPin,
} from "react-icons/fi";

export default function Footer() {
  return (
    <footer className="bg-gradient-to-b from-white to-zinc-50 border-t border-zinc-200 mt-24">

      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-20 text-center">
        <h2 className="text-3xl sm:text-4xl font-bold tracking-tight text-zinc-900">
          Stay in the loop
        </h2>
        <p className="mt-4 text-zinc-600 max-w-xl mx-auto leading-relaxed">
          Exclusive drops. Quiet deals. Tech stories worth your time.
        </p>
      </div>

      {/* Links */}
      <div className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-14 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-20">

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-5 tracking-wide uppercase text-sm">
              Shop
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600">
              {["Smartphones", "Tablets", "Audio", "Accessories"].map((item) => (
                <li key={item}>
                  <Link
                    to={`/${item.toLowerCase()}`}
                    className="relative inline-block hover:text-indigo-600 transition-colors duration-200
                               after:absolute after:left-0 after:-bottom-1 after:h-[1px] after:w-0
                               after:bg-indigo-600 after:transition-all after:duration-300
                               hover:after:w-full"
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-5 tracking-wide uppercase text-sm">
              Company
            </h3>
            <ul className="space-y-3 text-sm text-zinc-600">
              <li><Link to="/about-us" className="hover:text-indigo-600 transition">About us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-indigo-600 transition">Privacy policy</Link></li>
              <li><Link to="/support" className="hover:text-indigo-600 transition">Customer support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-5 tracking-wide uppercase text-sm">
              Contact
            </h3>
            <ul className="space-y-4 text-sm text-zinc-600">
              <li className="transition hover:text-zinc-900">
                <a
                  href="tel:9834567890"
                  className="flex items-center gap-3 hover:text-indigo-600 transition"
                >
                  <FiPhone className="w-4 h-4 text-indigo-600" />
                  <span>98********</span>
                </a>
              </li>
              <li className="flex items-center gap-3 transition hover:text-zinc-900">
                <FiMail className="w-4 h-4 text-indigo-600" />

                <a
                  href="mailto:voltstore7@gmail.com"
                  className="hover:text-indigo-600 transition"
                >
                  voltstore7@gmail.com
                </a>
              </li>

              <li className="transition hover:text-zinc-900">
                <a
                  href="https://www.google.com/maps/search/?api=1&query=BTM"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 hover:text-indigo-600 transition"
                >
                  <FiMapPin className="w-4 h-4 text-indigo-600" />
                  <span>BTM</span>
                </a>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-200 py-6 text-center text-xs sm:text-sm text-zinc-500">
        © {new Date().getFullYear()}{" "}
        <span className="font-medium text-zinc-700">VoltStore</span>. All rights reserved.
      </div>

    </footer>
  );
}