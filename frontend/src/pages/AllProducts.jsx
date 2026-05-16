import Header from "../components/Header.jsx";
import axios from "../api/axios.js";
import { useEffect, useState } from "react";
import { FiShoppingCart } from "react-icons/fi";

export default function AllProducts() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const response = await axios.get("/products");
      setProducts(response.data.products);
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

        {/* Product list */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {products.map((product) => (
            <div
              key={product._id}
              className="group bg-white rounded-2xl border border-zinc-200 overflow-hidden
               shadow-sm hover:shadow-xl transition-all duration-300"
            >
              {/* Image section */}
              <div className="relative bg-zinc-100 h-64 overflow-hidden">
                <img
                  src={product.productImages?.img1}
                  alt={product.productName}
                  className="w-full h-full object-cover
                   group-hover:scale-105 transition-transform duration-500"
                />
              </div>

              {/* Content */}
              <div className="p-5 flex flex-col gap-2">
                <p className="text-xs font-semibold text-zinc-500 uppercase tracking-wide">
                  {product.brand}
                </p>

                <h3 className="text-[15px] font-semibold text-zinc-900 leading-snug line-clamp-2">
                  {product.productName}
                </h3>

                {/* Price */}
                <div className="mt-1">
                  <span className="text-lg font-bold text-zinc-900">
                    Rs. {product.price}
                  </span>
                </div>

                {/* CTA */}
                <button
                  className="
         mt-4 w-full flex items-center justify-center gap-2
        py-3 text-sm font-semibold rounded-xl
        bg-blue-600 text-white
        hover:bg-blue-700 active:scale-[0.98]
        transition-all  
        "
                >
                  <FiShoppingCart className="w-4 h-4 text-white group-hover:scale-110 transition" />
                  Add to Cart 
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
    </div >
  );
}