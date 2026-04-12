const {FlightService} = require('../services/index');

const flightService = new FlightService();

// post -> /flights
const createFlight = async (req, res) => {
    try {
        const flight = await flightService.createFlight(req.body);
        return res.status(201).json({
            data: flight,
            status: true,
            message: 'sucessfully added flight here',
            error : {}
        });
    } catch (error) {
        return res.status(500).json({
            data : {},
            status: false,
            message : 'cant add flight',
            error : error
        })
    }
}

// get -> /flights/:id
const getFlight = async (req, res) => {
    try {
        const flight = await flightService.getFlight(req.params.id);
        return res.status(201).json({
            data: flight,
            status: true,
            message: 'sucessfully got the flight',
            error : {}
        });
    } catch (error) {
        return res.status(500).json({
            data : {},
            status: false,
            message : 'cant get flight',
            error : error
        })
    }
}

// get -> /flights
const getAllFlights = async (req, res) => {
    try {
        const flights = await flightService.getAllFlights(req.query);
        return res.status(201).json({
            data: flights,
            status: true,
            message: 'sucessfully got all flights',
            error : {}
        });
    } catch (error) {
        return res.status(500).json({
            data : {},
            status: false,
            message : 'cant get flights',
            error : error
        })
    }
}
module.exports = {
    createFlight,
    getAllFlights
}