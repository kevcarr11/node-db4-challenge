const express = require('express')
const modules = require('../data/module.js')

const router = express.Router({
  mergeParams: true,
})

router.get('/', (req, res) => {
  modules.getInstructions(req.params.id)
    .then(steps => {
      res.json(steps)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to get Shopping List" })
    })
})

module.exports = router