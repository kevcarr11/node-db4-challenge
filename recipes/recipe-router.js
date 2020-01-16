const express = require('express')
const modules = require('../data/module')
const ingredientsRouter = require('../ingredients/ingredients-router')
const instructionsRouter = require('../instructions/instructions-route')

const router = express.Router()

router.use('/:id/ingredients', ingredientsRouter)
router.use('/:id/instructions', instructionsRouter)

router.get('/', (req, res) => {
  modules.getRecipes()
    .then(recipes => {
      res.status(201).json(recipes)
    })
    .catch(err => {
      console.log(err)
      res.status(500).json({ message: "Failed to get recipes" })
    })
})


module.exports = router 