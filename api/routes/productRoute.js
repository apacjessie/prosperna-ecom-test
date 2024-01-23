import express from "express";
import {
  getAll,
  getProductById,
  getProductByCategory,
  updateProduct,
  deleteProduct,
  addProduct,
} from "../controllers/productController.js";
import multer from "multer";

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, "api/uploads/");
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  },
});

const upload = multer({ storage: storage });

const router = express.Router();

router.get("/", getAll);

router.get("/:id", getProductById);

router.get("/:category", getProductByCategory);

router.put("/update", updateProduct);

router.delete("/delete/:id", deleteProduct);

router.post("/add", upload.single("image"), addProduct);

export default router;
