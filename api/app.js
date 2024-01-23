import express from "express";
import cors from "cors";
import productRoute from "./routes/productRoute.js";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use("/products", express.static("api/assets/products"));
app.use("/uploads", express.static("api/uploads"));
app.use("/product", productRoute);

app.listen(3000, () => {
  try {
    console.log("Listening at http://localhost:3000");
  } catch (error) {
    throw console.error("Error listening at Port 3000");
  }
});
