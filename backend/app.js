const express = require('express');
const app = express();
const morgan = require('morgan');
const mongoose = require('mongoose');
const cors = require('cors');
require('dotenv/config');

app.use(cors());
app.options('*', cors());

// Middleware
app.use(express.json());
app.use(morgan('tiny'));

// routers
const usersRouter = require('./routers/users');
const cardsRouter = require('./routers/cards');
const categoriesRouter = require('./routers/categories');

const api = process.env.API_URL; // api/v1

app.use(`${api}/users`, usersRouter);
app.use(`${api}/cards`, cardsRouter);
app.use(`${api}/categories`, categoriesRouter); // api/v1/categories


mongoose.connect(process.env.CONNECTION_STRING, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    dbName: 'nmapp-database'
}).then(() => {
    console.log('Database Connection is ready..');
}).catch((err) => {
    console.log(err)
});

app.listen(3000, () => {
    console.log(api);
    console.log('server is running http://localhost:3000');
});
