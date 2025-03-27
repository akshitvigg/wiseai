const express = require('express');
const { generateFinancialAdvice } = require('../services/aiService');
const Transaction = require('../models/Transaction');
const router = express.Router();

router.get('/', async (req, res) => {
  try {
    const transactions = await Transaction.find();
    const advice = await generateFinancialAdvice(transactions);
    res.json({ advice });
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;