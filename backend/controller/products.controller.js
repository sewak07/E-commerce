import Products from "../model/Product.model.js";

/* ---------------- GET ALL PRODUCTS ---------------- */
export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();

    if (products.length === 0) {
      return res.status(404).json({ message: "No products found" });
    }

    return res.status(200).json({
      message: "Products fetched successfully",
      products,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching products",
      error: error.message,
    });
  }
};

/* ---------------- GET PRODUCT BY ID ---------------- */
export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);

    if (!product) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product fetched successfully",
      product,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error fetching product",
      error: error.message,
    });
  }
};

/* ---------------- CREATE PRODUCT ---------------- */
export const postProduct = async (req, res) => {
  try {
    const {
      productName,
      brand,
      category,
      price,
      description,
      stock,
    } = req.body;

    // 🔥 FIX: specs comes as STRING from FormData
    let specs = req.body.specs;

    if (!specs) {
      return res.status(400).json({
        message: "Specs object is missing",
      });
    }

    try {
      specs = JSON.parse(specs);
    } catch (err) {
      return res.status(400).json({
        message: "Invalid specs format",
      });
    }

    const product = await Products.create({
      productName,
      brand,
      category,
      price,
      description,
      stock,
      specs,
      productImages: {
        img1: req.files?.img1?.[0]?.path || null,
        img2: req.files?.img2?.[0]?.path || null,
      },
    });

    return res.status(201).json({
      message: "Product created successfully",
      product,
    });
  } catch (error) {
    console.log("🔥 CREATE ERROR:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* ---------------- UPDATE PRODUCT ---------------- */
export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const {
      productName,
      brand,
      category,
      price,
      description,
      stock,
    } = req.body;

    // 🔥 FIX specs parsing
    let specs = req.body?.specs;

    if (specs && typeof specs === "string") {
      specs = JSON.parse(specs);
    }

    const productImages = {
      img1: req.files?.img1?.[0]?.path || null,
      img2: req.files?.img2?.[0]?.path || null,
    };

    const updatedProduct = await Products.findByIdAndUpdate(
      id,
      {
        productName,
        brand,
        category,
        price,
        description,
        stock,
        specs,
        productImages,
      },
      { new: true }
    );

    if (!updatedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product updated successfully",
      product: updatedProduct,
    });
  } catch (error) {
    console.log("🔥 UPDATE ERROR:", error);
    return res.status(500).json({
      message: error.message,
    });
  }
};

/* ---------------- DELETE PRODUCT ---------------- */
export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;

    const deletedProduct = await Products.findByIdAndDelete(id);

    if (!deletedProduct) {
      return res.status(404).json({ message: "Product not found" });
    }

    return res.status(200).json({
      message: "Product deleted successfully",
      product: deletedProduct,
    });
  } catch (error) {
    return res.status(500).json({
      message: "Error deleting product",
      error: error.message,
    });
  }
};