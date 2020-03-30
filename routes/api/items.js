const express = require('express');
const router = express.Router();

// Item Model
const Item = require('../../models/item');

// ITT KÉRJÜK KI A MONGODB BŐL AZ ADATOKAT
// @route   GET api/items
// @desc    Get All Items
// access   Public

router.get('/', (req, res) => {
    Item.find()
    .sort({date: -1 })
    .then(items => res.json(items));
});

// ITT Csinálunk posztokat a MondoDb-be
// @route   POST api/items
// @desc    Create A Post
// access   Public

router.post('/', (req, res) => {
    const newItem = new Item({
        name: req.body.name,
        price: req.body.price
    });

    newItem.save().then(item => res.json(item));
});


// @route PUT api/items/:id
// @desc Update an Item
// @access Public
router.put("/:id", (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.update({ $set:{ 
        name: req.body.name, 
        price: req.body.price} })
    .then(()=> res.json( {success: true})))
    .catch(err => res.status(404).json({ success: false}));
    });



// ITT Törölhetünk posztokat
// @route   DELETE api/items
// @desc    Delete A Post
// access   Public

router.delete('/:id', (req, res) => {
    Item.findById(req.params.id)
    .then(item => item.remove().then(() => res.json({success: true}))
    ).catch(err => res.status(404).json({success: false}));
});

module.exports = router;