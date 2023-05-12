const { Router } = require("express");
const userController = require("../controllers/userController");
const router = Router();

router
  .get("/", async (req, res) => {
    try {
      const { id } = req.params;
      const users = await userController.getById(id);
      return res.status(200).json(users);
    } catch (error) {
      return res.status(400).json(error.message);
    }
  })
  .post("/", async (req, res) => {
    try {
      let users = await userController.create(req.body);
      return res.status(201).json(users);
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
  });

module.exports = router;
