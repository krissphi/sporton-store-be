import { Request, Response } from "express";
import Product from "../models/product.model";

export const createProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const productData = req.body;

    if (req.file) {
      productData.imageUrl = req.file.path;
    }

    const product = new Product(productData);
    await product.save();
    res.status(201).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error creating product", error });
  }
};

export const getProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const products = await Product.find()
      .populate("category")
      .sort({ createdAt: -1 });
    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error fetching products", error });
  }
};

export const getProductById = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const product = await Product.findById(req.params.id).populate("category");
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error fetching product", error });
  }
};

export const updateProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const productData = req.body;
    if (req.file) {
      productData.imageUrl = req.file.path;
    }
    const product = await Product.findByIdAndUpdate(
      req.params.id,
      productData,
      { new: true },
    ).populate("category");
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }

    res.status(200).json(product);
  } catch (error) {
    res.status(500).json({ message: "Error updating product", error });
  }
};

export const deleteProduct = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    const product = await Product.findByIdAndDelete(req.params.id);
    if (!product) {
      res.status(404).json({ message: "Product not found" });
      return;
    }
    res.status(200).json({ message: "Product deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Error deleting product", error });
  }
};

export const searchProducts = async (
  req: Request,
  res: Response,
): Promise<void> => {
  try {
    console.log('Search endpoint hit!'); // Debug log
    console.log('Query:', req.query.q); // Debug log
    
    const { q } = req.query;

    if (!q || typeof q !== "string" || q.trim() === "") {
      res.status(200).json([]);
      return;
    }

    const products = await Product.find({
      $or: [
        { name: { $regex: q, $options: "i" } },
        { description: { $regex: q, $options: "i" } },
      ],
    })
      .populate("category")
      .select("name description images price category stock")
      .limit(10);

    res.status(200).json(products);
  } catch (error) {
    res.status(500).json({ message: "Error searching products", error });
  }
};
