const {Flight} = require('../models/index');

class FlightRepository{
    async createFlight(obj) {
        try {
            const flight = await Flight.create(obj);
            return flight;
        } catch (error) {
            console.log('Something went wrong at the repository layer');
            throw {error};
        }
    }
}

module.exports = FlightRepository;