import express from 'express';
import cors from 'cors';
import conn from './db/conn.js';

import routes from './routes/router.js'
const app = express();

app.use(cors());

app.use(express.json());

conn ();

// Routes
//const routes = require("./routes/router")

app.use("/api", routes);


app.listen(3000, function() {
    console.log('Servidor rodando !');
});

