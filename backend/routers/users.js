const express = require('express');
const router = express.Router();
const { User } = require('../models/user');

router.get(`/`, async (req, res) => {
    const userList = await User.find();

    if (!userList) {
        res.status(500).json({ success: false });
    }

    res.send(userList);
})

// get user by email
router.get(`/:email`, async (req, res) => {
    let userList = await User.find({ 'email': req.params.email });

    if (!userList) {
        res.status(500).json({ success: false });
    }

    res.send(userList);
})

// create an new category 
router.post(`/`, async (req, res) => {
    let user = new User({
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        coronaCertificate: req.body.coronaCertificate,
    });

    user = await user.save();

    if (!user) {
        return res.status(404).send("cannot be created!");
    }

    res.send(user);
})

// update user by id 
router.put('/:id', async (req, res) => {
    const user = await User.findByIdAndUpdate(req.params.id, {
        firstName: req.body.firstName,
        lastName: req.body.lastName,
        email: req.body.email,
        password: req.body.password,
        coronaCertificate: req.body.coronaCertificate
    }, {
        new: true
    })

    if (!user) {
        return res.status(404).send("cannot be created!");
    }

    res.send(user);
})

module.exports = router;