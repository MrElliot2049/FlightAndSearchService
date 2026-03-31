const express = require('express');
const {PORT} = require('./config/serverConfig');

const SetupAndStartSever = async () => {
    // app object
    const app = express();
    app.listen(PORT, () => {
        console.log(`Server started listening on ${PORT}`);
    });
}

SetupAndStartSever();