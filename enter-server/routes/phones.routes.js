const express = require('express')
const router = express.Router()
const Phone = require('../models/Phone.model')

// Get all Phones
router.get('/phone', async (req, res) => {
  try {
    const phones = await Phone.find()
    res.json(phones)
  } catch (err) {
    res.status(500).json({ message: err.message })
  }
})

// Get One Phone
router.get('/phone/:id', async (req, res) => {
  try {
      const phone = await Phone.findById(req.params.id)
      if (phone == null) {
        return res.status(404).json({ message: 'Cannot find phone' })
      } else {
        res.json(res.phone)
      }
    } catch (err) {
        return res.status(500).json({ message: err.message })
    }
})


  
  module.exports = router