const express = require('express')
const router = express.Router()
const CarController = require('../controllers/CarController')
const Car = require('../model/Car')

router.get('/add', CarController.newCar)
router.post('/add', CarController.newCarSave)
router.get('/edit/:id', CarController.updateCar)
router.post('/edit', CarController.updateCarSave)
router.post('/remove', CarController.removeCar)
router.get('/allCars', CarController.allCars)
router.get('/', CarController.home)


module.exports = router
