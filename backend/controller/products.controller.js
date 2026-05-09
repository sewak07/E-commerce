import Products from '../model/Product.model.js';

//getting all products
export const getAllProducts = async (req, res) => {
  try {
    const products = await Products.find();
    if (products.length === 0) {
      return res.status(404).json({ message: 'No products found' });
    }
    return res.status(200).json({ message: 'Products fetched successfully', products });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching products', error });
  }
}

//get product by id
export const getProductById = async (req, res) => {
  try {
    const product = await Products.findById(req.params.id);
    if (!product) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json({ message: 'Product fetched successfully', product });
  } catch (error) {
    return res.status(500).json({ message: 'Error fetching product', error });
  }
}

// posting a product
export const postProduct = async (req, res) => {
  try {
    const { productName, brand, category, price, description, specs, stock } = req.body;

    // Validate required fields
    if (!productName || !brand || !category || !price || !description || !specs || !stock) {
      return res.status(400).json({ message: 'All fields are required' });
    }

    //validation for images
    if (!req.files?.img1?.[0]) {
      return res.status(400).json({ message: "img1 is required" });
    }


    const productImages = {
      img1: req.files?.img1?.[0]?.path,
      img2: req.files?.img2?.[0]?.path,
    }
    const createProduct = await Products.create({
      productName,
      brand,
      category,
      price,
      description,
      specs,
      productImages,
      stock,
    });

    return res.status(201).json({ message: 'Product posted successfully', product: createProduct });

  } catch (error) {
    return res.status(500).json({ message: 'Error posting product', error });
  }
}

//update product by id
export const updateProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const { productName, brand, category, price, description, specs, stock } = req.body;

    if (!productName || !brand || !category || !price || !description || !specs || !stock) {
      return res.status(400).json({ message: "All fields are required" });
    }

    const productImages = {
      img1: req.files?.img1?.[0]?.path || "",
      img2: req.files?.img2?.[0]?.path || "",
    };

    const updatedProduct = await Products.findByIdAndUpdate(
      id,
      {
        productName,
        brand,
        category,
        price,
        description,
        specs,
        productImages,
        stock,
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
    console.error(error);
    return res.status(500).json({ message: "Error updating product", error: error.message });
  }
};

// delete product by id
export const deleteProductById = async (req, res) => {
  try {
    const { id } = req.params;
    const deletedProduct = await Products.findByIdAndDelete(id);
    if (!deletedProduct) {
      return res.status(404).json({ message: 'Product not found' });
    }
    return res.status(200).json({ message: 'Product deleted successfully', product: deletedProduct });
  } catch (error) {
    return res.status(500).json({ message: 'Error deleting product', error });
  }
}