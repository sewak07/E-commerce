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

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: [e.target.value] });
  }

  const handleSubmit = async () => {
    e.preventDefault();

    const formData = new fromData();

    //basic fields
    formData.append("productName", form.productName);
    formData.append("brand", form.brand);
    formData.append("category", form.category);
    formData.append("price", form.price);
    formData.append("stock", form.stock);
    formData.append("description", form.description);

    // specs
    formData.append("specs[RAM]", form.RAM);
    formData.append("specs[storage]", form.storage);
    formData.append("specs[camera]", form.camera);
    formData.append("specs[processor]", form.processor);
    formData.append("specs[battery]", form.battery);

    // images
    formData.append("img1", img1);
    if (img2) formData.append("img2", img2);

    try {
      const response = await axios.post("/products", formData, {
        headers: { "Content-Type": "multipart/form-data" },
      });
      alert("PRoduct added successfully");
      e.target.reset();

    } catch (error) {
      console.error("Error adding products:", error)
    }
  }
  return (
    <div>
      <form onSubmit={handleSubmit}>
        <input name="productName" value={form.productName} onChange={handleChange} placeholder="Product Name" required />
        <input name="brand" value={form.brand} onChange={handleChange} placeholder="Brand" required />

        <select name="category" value={form.category} onChange={handleChange}>
          <option value="mobile">Mobile</option>
          <option value="tablet">Tablet</option>
          <option value="audio">Audio</option>
          <option value="accessories">Accessories</option>
        </select>


        <input type="number" name="price" placeholder="Price" required />
        <input type="number" name="stock" placeholder="Stock" required />

        {/* Specs */}
        <input name="specs[RAM]" placeholder="RAM" required />
        <input name="specs[storage]" placeholder="Storage" required />
        <input name="specs[camera]" placeholder="Camera" required />
        <input name="specs[processor]" placeholder="Processor" required />
        <input name="specs[battery]" placeholder="Battery" required />

        <input type="number" name="price" value={form.price} onChange={handleChange} placeholder="Price" required />
        <input type="number" name="stock" value={form.stock} onChange={handleChange} placeholder="Stock" required />


        <input name="RAM" value={form.RAM} onChange={handleChange} placeholder="RAM" />
        <input name="storage" value={form.storage} onChange={handleChange} placeholder="Storage" />
        <input name="camera" value={form.camera} onChange={handleChange} placeholder="Camera" />
        <input name="processor" value={form.processor} onChange={handleChange} placeholder="Processor" />
        <input name="battery" value={form.battery} onChange={handleChange} placeholder="Battery" />

        <textarea name="description" value={form.description} onChange={handleChange} placeholder="Description" />

        <input type="file" onChange={(e) => setImg1(e.target.files[0])} required />
        <input type="file" onChange={(e) => setImg2(e.target.files[0])} />

        <button className="bg-indigo-600 text-white px-4 py-2 rounded">
          Add Product
        </button>
      </form>
    </div>
  )
}