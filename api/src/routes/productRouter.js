const { Router } = require("express");
const productController = require("../controllers/productController");

const router = Router();

router
  .get("/", async (req, res) => {
    try {
      const { id } = req.params;
      const product = await productController.get(id);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  })
  .post("/", async (req, res) => {
    try {
      const product = await productController.create(req.body);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  })
  .put("/", async (req, res) => {
    try {
    } catch (error) {}
  })
  .delete("/", async (req, res) => {
    try {
    } catch (error) {}
  })
  .post("/generate", async (req, res) => {
    try {
      let productsApi = await fetch("https://fakestoreapi.com/products")
        .then((res) => res.json())
        .then((a) =>
          a.map((e) =>
            productController.create({
              ...e,
              name: e.title,
              quantity: Math.round(Math.random() * 100),
              imageUrl: e.image,
              categories: [e.category],
            })
          )
        );

      productsApi = await Promise.all(productsApi);
      return res.status(200).json(productsApi);
      return res.status(201).json(product);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  });

module.exports = router;
