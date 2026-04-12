const {FlightRepository, AirplaneRepository} = require('../repository/index');
const {compareTime} = require('../utils/compareTime');
class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            if (!compareTime(data.arrivalTime, data.departureTime)) {
                throw {error: 'Arrival time cant be more than departure time'};
            }
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            console.log("Something went wrong at the service layer");
            throw {error};
        }
    }

    async getFlight(flightId) {
        try {
            const flight = await this.flightRepository.getFlight(flightId);
            return flight;
        } catch (error) {
            console.log('Something went wrong at the service layer');
            throw {error};
        }
    }

    async getAllFlights(filter) {
        try {
            const response = await this.flightRepository.getAllFlights(filter);
            return response;
        } catch (error) {
            console.log('Something went wrong at the service layer');
            throw {error};
        }
    }
    async deleteFlight() {
        // to do
    }

    async updateFlight() {
        // to do
    }
}

module.exports = FlightService;
/**
 * {
    "flightNumber":"HMC708",
    "airplaneId":1,
    "departureAirportId":2,
    "arrivalAirportId":3,
    "arrivalTime":"2024-03-22T14:30:00",
    "departureTime":"2024-03-22T14:30:00",
    "price":12000
 }
 */