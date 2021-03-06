const express = require('express');
const router = express.Router();

// Item Model
const item = require('../../models/item');

// ITT KÉRJÜK KI A MONGODB BŐL AZ ADATOKAT
// @route   GET api/items
// @desc    Get All Items
// access   Public

router.get('/', (req, res) => {
    item.find()
    .sort({date: -1 })
    .then(items => res.json(items))
});
module.exports = router;