const express = require("express");
const router = express.Router();
const { Card } = require("../models/card");

// get all cards
router.get(`/`, async (req, res) => {
  const cardList = await Card.find().populate("category");

  if (!cardList) {
    res.status(500).json({ success: false });
  }

  res.send(cardList);
});

// get one card based on id
router.get(`/:id`, async (req, res) => {
  const card = await Card.findById(req.params.id).populate("category");

  if (!card) {
    return res.status(500).json({
      success: false,
      message: "cannot find the right card",
    });
  }

  res.status(200).send(card);
});

// create an new card
router.post(`/`, async (req, res) => {
  let card = new Card({
    category: req.body.category,
    createdAt: Date.now(),
    description: req.body.description,
    cardType: req.body.cardType,
    sender: req.body.sender,
  });

  card = await card.save();

  if (!card) {
    return res.status(404).send("cannot be created!");
  }

  res.send(card);
});
router.put(`/:id`, async (req, res) => {
  let user = await Card.findByIdAndUpdate(
    req.params.id,
    {
      category: req.body.category,
      description: req.body.description,
      cardType: req.body.cardType,
      answered_users: req.body.answered_users,
    },
    { new: true }
  );
});
module.exports = router;
