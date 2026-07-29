const express = require('express');
const router = express.Router();
const path = require('path');
const productsData = require('../data/products.json');

// GET /api/products — returns full categorized product list
router.get('/', (req, res) => {
  const { category } = req.query;
  if (category) {
    const found = productsData.categories.find(
      (c) => c.id.toLowerCase() === category.toLowerCase()
    );
    if (!found) {
      return res.status(404).json({ error: `Category "${category}" not found` });
    }
    return res.json({ category: found });
  }
  res.json({ categories: productsData.categories });
});

// GET /api/products/:categoryId — returns products for one category
router.get('/:categoryId', (req, res) => {
  const { categoryId } = req.params;
  const found = productsData.categories.find(
    (c) => c.id.toLowerCase() === categoryId.toLowerCase()
  );
  if (!found) {
    return res.status(404).json({ error: `Category "${categoryId}" not found` });
  }
  res.json({ category: found });
});

module.exports = router;
