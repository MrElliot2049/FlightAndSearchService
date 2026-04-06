const {AirportService} = require('../services/index');

const airportService = new AirportService();

// post -> /airport
const create = async (req, res) => {
    try {
        const airport = await airportService.createAirport(req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Sucessfully added the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't add the airport",
            error : error
        })
    }
}
// delete -> /airport/:id
const destroy = async (req, res) => {
    try {
        const airport = await airportService.deleteAirport(req.param.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Sucessfully deleted the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't delete the airport",
            error : error
        })
    }
}
// patch -> /airport/:id
const update = async (req, res) => {
     try {
        const airport = await airportService.updateAirport(req.param.id, req.body);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Sucessfully updated the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't update the airport",
            error : error
        })
    }
}
// get -> /airport/:id
const get = async (req, res) => {
     try {
        const airport = await airportService.getAirport(req.param.id);
        return res.status(200).json({
            data: airport,
            success: true,
            message: "Sucessfully got the airport",
            error: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data: {},
            success: false,
            message: "Can't get the airport",
            error : error
        })
    }
}

module.exports = {
    create, 
    destroy,
    update, 
    get
}