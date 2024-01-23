import express from "express";
import {
  getAll,
  getProductById,
  getProductByCategory,
  updateProduct,
  deleteProduct,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getProductById);

router.get("/:category", getProductByCategory);

router.put("/update", updateProduct);

router.delete("/delete/:id", deleteProduct);

export default router;
