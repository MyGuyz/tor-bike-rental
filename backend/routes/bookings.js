const express = require("express");
const router = express.Router();
const Booking = require("../models/Booking");

router.post("/", async (req, res) => {
  try {
    const booking = new Booking({
      ...req.body,
      bookingCode: "BK" + Math.floor(100000 + Math.random() * 900000),
    });
    await booking.save();
    res.status(201).json({ message: "Booking successful", code: booking.bookingCode });
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
});

module.exports = router;
