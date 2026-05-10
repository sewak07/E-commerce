import Header from "../components/Header.jsx";
import axios from "../api/axios.js";
import { useEffect, useState } from "react";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response.data);
      console.log(response.data);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  };

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <div className="min-h-screen bg-slate-50">
      <Header />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-10 py-10">

        <h1 className="text-3xl sm:text-4xl font-semibold text-zinc-900 mb-8">
          All Products
        </h1>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">

          {products.map((product) => (
            <div
              key={product._id}
              className="bg-white border border-zinc-200 rounded-2xl p-4 shadow-sm hover:shadow-md transition"
            >
              {/* Image Placeholder */}
              <div className="w-full h-44 bg-slate-100 rounded-xl mb-4 flex items-center justify-center text-zinc-400 text-sm">
                Product Image
              </div>

              <h2 className="text-base font-medium text-zinc-900 mb-1">
                {product.productname}
              </h2>

              <p className="text-sm text-zinc-500 mb-3">
                {product.brand || "No brand"}
              </p>

              <div className="flex items-center justify-between">
                <span className="text-indigo-600 font-semibold">
                  Rs {product.price}
                </span>

                <button className="px-3 py-1.5 text-sm border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-600 hover:text-white transition">
                  View
                </button>
              </div>
            </div>
          ))}

        </div>

        {/* Empty state (optional but professional) */}
        {products.length === 0 && (
          <p className="text-center text-zinc-500 mt-20">
            No products available.
          </p>
        )}

      </div>
    </div>
  );
}