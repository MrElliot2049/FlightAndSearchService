const { Flight } = require('../models/index');
const { Op, where } = require('sequelize');


class FlightRepository {
    #createfilter(data) {
        let priceFilter = [];
        let filter = {};
        if (data.arrivalAirportId) {
            filter.arrivalAirportId = data.arrivalAirportId;
        }

        if (data.departureAirportId) {
            filter.departureAirportId = data.departureAirportId;
        }

        if (data.minPrice) {
            priceFilter.push({ [Op.gte]: data.minPrice });
        }
        if (data.maxPrice) {
            priceFilter.push({ [Op.lte]: data.maxPrice });
        }
        if (priceFilter.length) {
            Object.assign(filter, { price: { [Op.and]: priceFilter } });
        }

        return filter;
    }
    async createFlight(obj) {
        try {
            const flight = await Flight.create(obj);
            return flight;
        } catch (error) {
            console.log('Something went wrong at the repository layer');
            throw { error };
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await Flight.findByPk(flightId);
            return flight;
        } catch (error) {
            console.log('something went wrong at the repository layer');
            throw { error };
        }
    }

    async getAllFlights(filter) {
        try {
            const priceFilter = this.#createfilter(filter);
            const flights = await Flight.findAll({
                where: priceFilter
            });
            return flights;
        } catch (error) {
            consolw.log('Something went wrong at the repository layer.');
            throw { error };
        }
    }
}

module.exports = FlightRepository;