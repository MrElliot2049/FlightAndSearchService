const express = require('express');
const router = express.Router();
const CityController = require('../../controllers/city-controller');
const AirportController = require('../../controllers/airport-controller');
const FlighController = require('../../controllers/flight-controller')

// city paths
router.post('/city', CityController.create);
router.delete('/city/:id', CityController.destroy);
router.get('/city/:id', CityController.get);
router.get('/city', CityController.getAll);
router.patch('/city/:id', CityController.update);
router.post('/cities', CityController.addMultipleCities);
router.get('/city/airport-from-city/:id', CityController.getAirportFromCity)

// airport parts
router.post('/airport', AirportController.create);
router.get('/airport/:id', AirportController.get);
router.patch('/airport/:id', AirportController.update);
router.delete('/airport/:id', AirportController.destroy);


//flight parts
router.post('/flights', FlighController.createFlight);
router.get('/flights',FlighController.getAllFlights);
module.exports = router;