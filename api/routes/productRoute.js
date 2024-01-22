import express from "express";
import {
  getAll,
  getProductById,
  getProductByCategory,
} from "../controllers/productController.js";

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getProductById);

router.get("/:category", getProductByCategory);

export default router;
