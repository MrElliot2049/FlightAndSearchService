const {FlightRepository, AirplaneRepository} = require('../repository/index');

class FlightService {
    constructor() {
        this.flightRepository = new FlightRepository();
        this.airplaneRepository = new AirplaneRepository();
    }

    async createFlight(data) {
        try {
            const airplane = await this.airplaneRepository.getAirplane(data.airplaneId);
            const flight = await this.flightRepository.createFlight({
                ...data, totalSeats: airplane.capacity
            });
            return flight;
        } catch (error) {
            
        }
    }

    async getFlight(flightId) {
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
    "arrivalTime":"2024-03-22T14:30:00.000Z",
    "departureTime":"2024-03-22T14:30:00.000Z",
    "price":12000
}
 */