const express = require('express');
const { PORT } = require('./config/serverConfig');
const bodyParser = require('body-parser');
const ApiRoutes = require('./routes/index');
const db = require('./models/index')
const { City, Airport } = require('./models/index')

const SetupAndStartSever = async () => {
    // app object
    const app = express();
    app.use(bodyParser.json());
    app.use(bodyParser.urlencoded({ extended: true }));


    app.use('/api', ApiRoutes);
    app.listen(PORT, async () => {
        console.log(`Server started listening on ${PORT}`);
        // db.sequelize.sync({ alter: true });
    });
}

SetupAndStartSever();