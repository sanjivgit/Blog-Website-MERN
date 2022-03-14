const router = require("express").Router();
const Categories = require("../models/Category");

// CREATE CATEGORIES

router.post("/", async (req, res) => {
  try {
    const newCategory = new Categories(req.body);
    const cateSave = await newCategory.save();
    res.status(200).json(cateSave);
  } catch (err) {
    res.status(500).json(err);
  }
});

// GET CATEGORIES

router.get("/", async (req, res) => {
  try {
    const category = await Categories.find();
    res.status(200).json(category);
  } catch (err) {
    res.status(500).json(err);
  }
});

module.exports = router;
