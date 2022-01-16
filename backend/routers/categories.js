const express = require('express');
const router = express.Router();
const { Category } = require('../models/category');

// get all categorries
router.get(`/`, async (req, res) => {
    const categoryList = await Category.find();

    if (!categoryList) {
        return res.status(500).json({ success: false });
    }

    res.send(categoryList);
})

// get one category by id --> api/v1/categories/61b8fdf502047fa54217e637
router.get('/:id', async (req, res) => {
    const category = await Category.findById(req.params.id);

    if (!category) {
        return res.status(500).json({
            success: true,
            message: 'there is no category with the id'
        })
    }

    res.status(200).send(category);
})

// get one category by name
router.get('/:name', async (req, res) => {
    const categoryList = await Category.find();

    const category = categoryList.filter((category) => category.name === req.query.name);
    console.log(category);

    if (!category) {
        return res.status(500).json({
            success: true,
            message: 'there is no category with the id'
        })
    }

    res.status(200).send(category);
})

// update category by id 
router.put('/:id', async (req, res) => {
    const category = await Category.findByIdAndUpdate(req.params.id, {
        name: req.body.name,
        icon: req.body.icon
    }, {
        new: true
    })

    if (!category) {
        return res.status(404).send("cannot be created!");
    }

    res.send(category);
})

// create an new category 
router.post(`/`, async (req, res) => {
    let category = new Category({
        name: req.body.name,
        icon: req.body.icon,
    });

    category = await category.save();

    if (!category) {
        return res.status(404).send("cannot be created!");
    }

    res.send(category);
})

// delete category by id
router.delete('/:id', (req, res) => {
    Category.findByIdAndRemove(req.params.id)
        .then(category => {
            if (category) {
                return res.status(200).json({
                    success: true,
                    message: 'the Categorie is deleted'
                })
            } else {
                return res.status(404).json({
                    success: false,
                    message: `the categoriy cpouldn't be deleted`
                })
            }
        }).catch(err => {
            return res.status(400).json({ success: false, error: err });
        })
})

module.exports = router;