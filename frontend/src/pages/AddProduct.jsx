import axios from "../api/axios.js";
import { useState } from "react";

export default function AddProduct() {
  const [form, setForm] = useState({
    productName: "",
    brand: "",
    category: "mobile",
    price: "",
    description: "",
    stock: "",
    RAM: "",
    storage: "",
    camera: "",
    processor: "",
    battery: "",
  });

  const [img1, setImg1] = useState(null);
  const [img2, setImg2] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const formData = new FormData();

      // basic fields
      formData.append("productName", form.productName);
      formData.append("brand", form.brand);
      formData.append("category", form.category);
      formData.append("price", Number(form.price));
      formData.append("stock", Number(form.stock));
      formData.append("description", form.description);

      // ✅ IMPORTANT FIX: send specs as JSON string (NOT bracket syntax)
      formData.append(
        "specs",
        JSON.stringify({
          RAM: form.RAM,
          storage: form.storage,
          camera: form.camera,
          processor: form.processor,
          battery: form.battery,
        })
      );

      // images
      formData.append("img1", img1);
      if (img2) formData.append("img2", img2);

      await axios.post("/products", formData, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });

      alert("Product added successfully");

      setForm({
        productName: "",
        brand: "",
        category: "mobile",
        price: "",
        description: "",
        stock: "",
        RAM: "",
        storage: "",
        camera: "",
        processor: "",
        battery: "",
      });

      setImg1(null);
      setImg2(null);
    } catch (error) {
      console.error("Error adding product:", error);
      alert("Something went wrong");
    } finally {
      setLoading(false);
    }
  };

  const inputClass =
    "bg-gray-800 border border-gray-700 text-gray-100 placeholder-gray-500 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-indigo-600 transition";

  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-4 py-10">
      <form
        onSubmit={handleSubmit}
        className="w-full max-w-3xl bg-gray-900 border border-gray-800 rounded-2xl p-8 space-y-6 shadow-2xl"
      >
        <div>
          <h1 className="text-2xl font-semibold text-white">
            Add New Product
          </h1>
          <p className="text-sm text-gray-400">
            Details matter. Craft them carefully.
          </p>
        </div>

        {/* Basic Info */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="productName" value={form.productName} onChange={handleChange} placeholder="Product Name" className={inputClass} />
          <input name="brand" value={form.brand} onChange={handleChange} placeholder="Brand" className={inputClass} />
          <select name="category" value={form.category} onChange={handleChange} className={inputClass}>
            <option value="mobile">Mobile</option>
            <option value="tablet">Tablet</option>
            <option value="audio">Audio</option>
            <option value="accessories">Accessories</option>
          </select>
          <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" className={inputClass} />
          <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" className={inputClass} />
        </div>

        {/* Specs */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input name="RAM" value={form.RAM} onChange={handleChange} placeholder="RAM" className={inputClass} />
          <input name="storage" value={form.storage} onChange={handleChange} placeholder="Storage" className={inputClass} />
          <input name="camera" value={form.camera} onChange={handleChange} placeholder="Camera" className={inputClass} />
          <input name="processor" value={form.processor} onChange={handleChange} placeholder="Processor" className={inputClass} />
          <input name="battery" value={form.battery} onChange={handleChange} placeholder="Battery" className={inputClass} />
        </div>

        <textarea
          name="description"
          value={form.description}
          onChange={handleChange}
          placeholder="Product description..."
          rows={4}
          className={`${inputClass} resize-none`}
        />

        {/* Images */}
        <input type="file" onChange={(e) => setImg1(e.target.files[0])} />
        <input type="file" onChange={(e) => setImg2(e.target.files[0])} />

        <button
          type="submit"
          disabled={loading}
          className="w-full bg-indigo-600 text-white py-3 rounded-xl"
        >
          {loading ? "Adding..." : "Add Product"}
        </button>
      </form>
    </div>
  );
}