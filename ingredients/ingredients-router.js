const express = require('express')
const modules = require('../data/module')

const router = express.Router({
  mergeParams: true,
})

router.get('/', (req, res) => {
  modules.getShoppingList(req.params.id)
  .then(list => {
    res.json(list)
  })
  .catch(err => {
    console.log(err)
    res.status(500).json({ message: "Failed to get Shopping List" })
  })
})

module.exports = router