const express = require('express');
const {PORT} = require('./config/serverConfig');
const bodyParser = require('body-parser');


const SetupAndStartSever = async () => {
    // app object
    const app = express();
    app.use(bodyParser.urlencoded({extended:true}));
    app.use(bodyParser.json());
    
    app.listen(PORT, () => {
        console.log(`Server started listening on ${PORT}`);
    });
}

SetupAndStartSever();