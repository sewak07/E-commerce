import Header from "../components/Header.jsx";
import { Link } from "react-router-dom";
import Footer from "../components/Footer.jsx";

export default function Home() {
  return (
    <div className="min-h-screen bg-slate-50">

      <Header />

      {/* Hero */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-24 text-center">

        <p className="text-indigo-600 font-bold">⚡New Arrivals 2026</p>
        <h1 className="text-4xl sm:text-5xl font-bold text-zinc-900">
          Next-Gen Tech
          <br></br>
          <span className="text-indigo-600">At your finger tips</span>
        </h1>

        <p className="mt-6 max-w-2xl mx-auto text-zinc-600">
          Premium electronics curated for performance, design, and everyday life.<br></br>
          Discover the latest smartphones, accessories, and electronics at unbeatable prices.<br>
          </br> Free shipping on orders over 10k.
        </p>

        <div className="mt-8 flex justify-center gap-4">
          <Link
            to="/allProducts"
            className="px-6 py-3 bg-indigo-600 text-white rounded-xl hover:bg-indigo-500 transition"
          >
            Shop Products
          </Link>

          <Link
            to="/signup"
            className="px-6 py-3 border border-zinc-300 rounded-xl text-zinc-700 hover:border-indigo-600 hover:text-indigo-600 transition"
          >
            Create Account
          </Link>
        </div>

      </section>

      {/* Trust Section */}
      <section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 pb-24 grid grid-cols-1 md:grid-cols-4 gap-6">
        {[
          ["Fast Delivery", "Reliable shipping nationwide"],
          ["Quality Products", "Verified and tested devices"],
          ["Secure Payments", "Protected checkout system"],
          ["24/7 Support", "We're here to help"],
        ].map(([title, desc]) => (
          <div
            key={title}
            className="bg-white border border-zinc-200 rounded-2xl p-6 text-center"
          >
            <h3 className="font-semibold text-zinc-800">{title}</h3>
            <p className="mt-2 text-sm text-zinc-600">{desc}</p>
          </div>
        ))}
      </section>



      <Footer />
    </div>
  );
}