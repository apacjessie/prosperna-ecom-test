import fs from "fs/promises";

const readData = async (callback, useImage = true) => {
  const data = JSON.parse(await fs.readFile("api/data.json", "utf-8"));
  const updateImagePath = data.map((product) => {
    return useImage
      ? { ...product, image: `http://localhost:3000${product.image}` }
      : product;
  });
  callback(updateImagePath);
};

const rewriteData = async (data) => {
  try {
    await fs.writeFile("api/data.json", JSON.stringify(data));
  } catch (error) {
    console.error(error);
  }
};

const getAll = (req, res) => {
  readData((data) => {
    const { query } = req;
    console.log(data);
    if (!query.category) return res.status(200).json(data);

    const validCategory = ["tshirts", "shirts", "jackets", "dress", "sweaters"];

    if (!validCategory.includes(query.category)) {
      return res
        .status(404)
        .json({ message: "No products with that category!" });
    } else {
      const productByCategory = data.filter(
        (product) => product.category === query.category
      );
      return res.status(200).json(productByCategory);
    }
  });
};

const getProductById = (req, res) => {
  readData((data) => {
    const product = data.find((prod) => prod.id === req.params.id);
    if (!product)
      return res.status(400).json({ message: "No product with that id!" });

    return res.status(200).json(product);
  });
};

const getProductByCategory = (req, res) => {
  readData((data) => {
    const products = data.filter(
      (prod) => prod.category === req.params.category
    );

    if (products.length <= 0)
      return res
        .status(400)
        .json({ message: "No product with that category!" });

    return res.status(200).json(products);
  });
};

const updateProduct = (req, res) => {
  readData((data) => {
    const { body } = req;
    const { image, ...prod } = body;
    const updated = data.map((product) =>
      product.id === body.id ? { ...prod, image: product.image } : product
    );

    rewriteData(updated);
    return res.status(200).json({ message: "success" });
  }, false);
};

const deleteProduct = (req, res) => {
  readData((data) => {
    const { id } = req.params;
    const updated = data.filter((product) => product.id !== id);

    rewriteData(updated);
    return res.status(200).json({ message: "success" });
  }, false);
};

const addProduct = (req, res) => {
  readData((data) => {
    const { body, file } = req;

    const product = {
      id: body.id,
      name: body.name,
      gender: body.gender,
      category: body.category,
      price: parseInt(body.price),
      rating: parseInt(body.rating),
      image: `/uploads/${file.filename}`,
    };

    const updated = [...data, product];

    rewriteData(updated);
    return res.status(200).json({ message: "success" });
  }, false);
};

export {
  getAll,
  getProductById,
  getProductByCategory,
  updateProduct,
  deleteProduct,
  addProduct,
};
