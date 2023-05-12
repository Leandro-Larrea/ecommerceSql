const { Router } = require("express");
const categoryController = require("../controllers/categoryController");
const router = Router();

router
  .get("/", async (req, res) => {
    try {
      let categories = await categoryController.get();
      return res.status(200).json(categories);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  })
  .post("/", async (req, res) => {
    try {
    } catch (error) {}
  })
  .put("/", async (req, res) => {
    try {
    } catch (error) {}
  })
  .delete("/", async (req, res) => {
    try {
    } catch (error) {}
  });

module.exports = router;
