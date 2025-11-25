import express from "express";
import {
  createProduct,
  getProducts,
  getProductById,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

// CRUD
router.post("/", createProduct); // create new product
router.get("/", getProducts); // all products
router.get("/:id", getProductById); // single product (slug or id)
router.put("/:id", updateProduct); // update
router.delete("/:id", deleteProduct); // delete

export default router;
