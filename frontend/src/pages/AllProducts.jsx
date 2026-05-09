import Header from "../components/Header.jsx";
import axios from "../api/axios.js";

export default function AllProducts() {
  const fetchProducts = async () => {
    try {
      const response = await axios.get("/products");
      const products = response.data;
      console.log(products);
    } catch (error) {
      console.error("Error fetching products:", error);
    }
  }
  return (
    <div className="all-products">
      <Header />
      <h1>All Products</h1>
      <div className="products">

      </div>
    </div>
  )
}