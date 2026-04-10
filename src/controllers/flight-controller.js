const {FlightService} = require('../services/index');

const flightService = new FlightService();

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

module.exports = {
    createFlight
}