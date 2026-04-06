const {CityService} = require('../services/index')

const cityService = new CityService();

// post /city
const create = async (req,res) => {
    try {
        const city = await cityService.createCity(req.body);
        return res.status(201).json({
            data : city,
            success: true,
            message : "Instance is successfully created",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : "Error in creating the Instance",
            err: error
        })
    }
}
// delete /city/:id
const destroy = async (req, res) => {
    try {
        const response = await cityService.deleteCity(req.params.id);
        return res.status(200).json({
            data : response,
            success: true,
            message : "Successfully deleted a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : "Error in deleting a city",
            err: error
        })
    }
}

// get -> /city/:id 
const get = async (req, res) => {
    try {
        const city = await cityService.getCity(req.params.id);
        return res.status(200).json({
            data : city,
            success: true,
            message : "Successfully got a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : "Error in getting a city",
            err: error
        })
    }
}

// patch -> /city/:id -> req.body
const update = async (req, res) => {
    try {
        const city = await cityService.updateCity(req.params.id, req.body);
        return res.status(200).json({
            data : city,
            success: true,
            message : "Successfully updated a city",
            err: {}
        })
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : "Error in updating a city",
            err: error
        })
    }
}

const getAll = async (req, res) => {
    try {
        const cities = await cityService.getAllCities(req.query);
        return res.status(200).json({
            data : cities,
            success: true,
            message : "Successfully got all cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : "Error in getting all cities",
            err: error
        })
    }
}
// post -> /cities
const addMultipleCities = async (req, res) => {
     try {
        const cities = await cityService.addMultipleCities(req.body);
        return res.status(200).json({
            data : cities,
            success: true,
            message : "Successfully added all cities",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : "Error in getting all cities",
            err: error
        })
    }
}

// get -> /airport-from-city/:id
const getAirportFromCity = async (req, res) => {
     try {
        const cities = await cityService.getAirportFromCity(req.params.id);
        return res.status(200).json({
            data : cities,
            success: true,
            message : "Successfully got all airports",
            err: {}
        });
    } catch (error) {
        console.log(error);
        return res.status(500).json({
            data : {},
            success: false,
            message : "Error in getting all airports",
            err: error
        })
    }
}

module.exports = {
    create,
    destroy,
    get,
    update,
    getAll,
    addMultipleCities,
    getAirportFromCity
}