import fs from "fs/promises";

const readData = async (callback) => {
  const data = JSON.parse(await fs.readFile("api/data.json", "utf-8"));
  const updateImagePath = data.map((product) => {
    return { ...product, image: `http://localhost:3000${product.image}` };
  });
  callback(updateImagePath);
};

const getAll = (req, res) => {
  readData((data) => {
    const { query } = req;
    console.log(query);

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

export { getAll, getProductById, getProductByCategory };
