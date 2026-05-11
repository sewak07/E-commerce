import { Link } from "react-router-dom";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-zinc-200 mt-20">
      
      {/* Newsletter */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-16 text-center">
        <h2 className="text-2xl font-semibold text-zinc-900">
          Stay in the loop
        </h2>
        <p className="mt-2 text-zinc-600 max-w-xl mx-auto">
          Get exclusive deals, new arrivals, and tech news delivered to your inbox.
        </p>

    
      </div>

      {/* Links */}
      <div className="border-t border-zinc-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

          {/* Shop */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Shop</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><Link to="/smartphones" className="hover:text-indigo-600">Smartphones</Link></li>
              <li><Link to="/tablets" className="hover:text-indigo-600">Tablets</Link></li>
              <li><Link to="/audio" className="hover:text-indigo-600">Audio</Link></li>
              <li><Link to="/accessories" className="hover:text-indigo-600">Accessories</Link></li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Company</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li><Link to="/about-us" className="hover:text-indigo-600">About us</Link></li>
              <li><Link to="/privacy-policy" className="hover:text-indigo-600">Privacy policy</Link></li>
              <li><Link to="/support" className="hover:text-indigo-600">Customer support</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold text-zinc-900 mb-4">Contact</h3>
            <ul className="space-y-2 text-sm text-zinc-600">
              <li>📞 9834567890</li>
              <li>✉️ voltstore7@gmail.com</li>
              <li>📍 BTM</li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="border-t border-zinc-200 py-6 text-center text-sm text-zinc-500">
        © {new Date().getFullYear()} VoltStore. All rights reserved.
      </div>

    </footer>
  );
}